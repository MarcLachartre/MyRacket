import {Comparator} from '../comparator_manager/comparator_file_manager';
import {RacketCardStyleSelector} from '../racket_cards/racket_card_style_selector';
import {ComparedRacketCookie} from '../cookies_manager/compared_racket_cookies';
const defaultImage = require("../../images/racket-sample.jpg");
// console.log("racket")
export class Racket extends RacketCardStyleSelector {
  constructor(id, brand, model, strength, weight, stringPattern, balance, headsize, length, swingweight, stiffness, index){
    super();
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.strength = strength;
    this.weight = weight;
    this.stringPattern = stringPattern;
    this.balance = balance;
    this.headsize = headsize;
    this.length = length;
    this.swingweight = swingweight;
    this.stiffness = stiffness;
    this.index = index
  }

  createCard() { //creates the card and then create the card top/bottom/button to appends to it. It also adds the event listeners to the card
    const card = document.createElement("div");
    card.style.opacity = "1"
    const cardItemDescription = document.createElement("div");

    card.classList.toggle("racket-card");
    cardItemDescription.classList.toggle("card-item-description");
    card.appendChild(cardItemDescription);

    const topCard = this.createCardTop();
    const bottomCard = this.createCardBottom();
    cardItemDescription.appendChild(topCard);
    cardItemDescription.appendChild(bottomCard);

    super.addStyleOnClick(bottomCard.querySelector(".racket-checkbox"));
    const racketCookie = new ComparedRacketCookie("selected_racket=")
    racketCookie.racketCookieEvent(card.querySelector('.racket-checkbox'));

    return card
  }

  positionning(card) {
    let cardPosition = this.index;

    let rowPosition = Math.floor((cardPosition/4)+1);
    
    let columnPosition = cardPosition
    if (cardPosition > 4) {
      do {
        cardPosition -= 4;
        if (cardPosition <= 4) {
          columnPosition = cardPosition;
        }
      } while (cardPosition >= 4)
    } else {
      columnPosition = cardPosition;
    }

    columnPosition = String(columnPosition + 1)
    rowPosition = String(rowPosition)

    card.style.gridColumnStart = columnPosition;
    card.style.gridRowStart = rowPosition;
  }

  createCardTop() {
    const topCard = document.createElement("div");
    const cardImage = document.createElement("div");
    const image = this.image();
    const cardBrandModel = document.createElement("div");
    const cardBrand = document.createElement("div");
    const cardModel = document.createElement("div");
    const brand = document.createElement("h4");
    const model = document.createElement("h5");
    brand.innerHTML = this.brand;
    model.innerHTML = this.model;

    topCard.classList.toggle("card-top");
    cardImage.classList.toggle("card-image");
    cardBrandModel.classList.toggle("card-brand-model");
    cardBrand.classList.toggle("card-brand");
    cardModel.classList.toggle("card-model");

    cardBrandModel.appendChild(cardBrand);
    cardBrandModel.appendChild(cardModel);
    topCard.appendChild(cardImage);
    cardImage.appendChild(image);
    topCard.appendChild(cardBrandModel);
    cardBrand.appendChild(brand);
    cardModel.appendChild(model);

    topCard.addEventListener("click", () => {
      location.href = `rackets/${this.id}`;
    })

    return topCard
  }

  image() {
    const cardImage = document.createElement("img");
    const pathEnd = String(this.brand.toLowerCase().replace(/\s/g, "")) + "-" + String(this.model.toLowerCase().replace(/\s/g, "") + ".jpeg");
  
      import(`../../images/${pathEnd}`).then(module => {  
        cardImage.src = module.default;
      }).catch(() => {
        cardImage.src = defaultImage;
      });
      
    return cardImage
  }

  createCardBottom() {
    const bottomCardClassNames = ["card-bottom", "card-spec", "card-weight-stringpattern", "card-balance-headsize", "card-weight", "card-string-pattern", "card-balance", "card-headsize"];
    const bottomCardElements = [];
    bottomCardClassNames.forEach(className => { //creates each div/h6 with its class name
      let element = "";
      if (["card-weight", "card-string-pattern", "card-balance", "card-headsize"].includes(className)) {
        element = document.createElement("h6");
      } else {
        element = document.createElement("div");
      };
      element.classList.toggle(className);
      bottomCardElements.push(element);
    });

    const warningMessage = this.createWarningMessage();
    bottomCardElements[0].appendChild(warningMessage);

    for (const element of bottomCardElements) { //append div to each other in the correct order and innerHTML is set here
      if (element.className === "card-bottom") {
        element.appendChild(bottomCardElements[1]);

      } else if (element.className === "card-spec") {
        element.appendChild(bottomCardElements[2]);
        element.appendChild(bottomCardElements[3]);

      } else if (element.className === "card-weight-stringpattern") {
        bottomCardElements[4].innerHTML = String(this.weight) + "g";
        bottomCardElements[5].innerHTML = String(this.stringPattern).slice(0,2) + "x" + String(this.stringPattern).slice(2,4);
        element.appendChild(bottomCardElements[4]);
        element.appendChild(bottomCardElements[5]);

      } else if (element.className === "card-balance-headsize") {
        bottomCardElements[6].innerHTML = String(this.balance) + "cm";
        bottomCardElements[7].innerHTML = String(this.headsize) + "cm²";
        element.appendChild(bottomCardElements[6]);
        element.appendChild(bottomCardElements[7]);
      }
    }
    const compareButton = this.createButton();

    bottomCardElements[0].appendChild(compareButton);
    return bottomCardElements[0]
  }

  createWarningMessage() {
    const warningContainer = document.createElement("div");
    const exclamationTriangle = document.createElement("i");
    const warningText = document.createElement("div");
    const text = document.createElement("h6");
    text.innerHTML = "Please remove a racket before adding a new one";

    warningContainer.classList.toggle("warning-container");
    exclamationTriangle.classList.toggle("fas");
    exclamationTriangle.classList.toggle("fa-exclamation-triangle");
    warningText.classList.toggle("warning-text");

    warningText.appendChild(text);
    warningContainer.appendChild(exclamationTriangle);
    warningContainer.appendChild(warningText);

    return warningContainer
  }

  createButton() {
    const buttonClassNames = [["button-and-link", "div"], ["see-more-link", "a"], ["racket-compare-button", "div"], ["button-up", "div"], ["racket-checkbox-label", "label"], ["racket-checkbox", "input"], ["fas", "i", "fa-plus"], ["fas", "i", "fa-check"], ["fas", "i", "fa-times"], ["compare", "div"]]
    const buttonElements = [];
    for (let i = 0; i < buttonClassNames.length; i++) {
      let element = document.createElement(buttonClassNames[i][1]);
      element.classList.toggle(buttonClassNames[i][0]);

      if (element.className === "see-more-link") {
        buttonElements[i-1].appendChild(element);
      } else if (element.className === "racket-compare-button") {
        buttonElements[i-2].appendChild(element);
      } else if (element.className === "compare") {
        buttonElements[i-5].appendChild(element);
        element.innerHTML= "Compare"
      } else if (element.className === "fas") {
        element.classList.toggle(buttonClassNames[i][2]);
        buttonElements[i-1].appendChild(element);
        if (buttonClassNames[i][2] === "fa-plus") {
          buttonElements[i-2].appendChild(element);
        } else if (buttonClassNames[i][2] === "fa-check") {
          buttonElements[i-3].appendChild(element);
        } else if (buttonClassNames[i][2] === "fa-times") {
          buttonElements[i-4].appendChild(element);
        };
      } else if (element.className !== "button-and-link"){
        buttonElements[i-1].appendChild(element);
      };
      buttonElements.push(element);
    };
    this.setCheckboxAttributes(buttonElements[5]);
    this.setCheckboxComparisionListener(buttonElements[5]);
    return buttonElements[0];
  }

  setCheckboxComparisionListener(checkbox) {
    const comparator = new Comparator();
    comparator.addComparisionListener(checkbox)
  }

  setCheckboxAttributes(checkbox) {
    checkbox.name = "selected_racket_id[]";
    checkbox.type = "checkbox";
    checkbox.id = this.id;
    checkbox.value = this.id;
    checkbox.dataset.id = this.id;
    checkbox.dataset.brand = this.brand;
    checkbox.dataset.model = this.model;
    checkbox.dataset.headsize = this.headsize;
    checkbox.dataset.weight = this.weight;
    checkbox.dataset.length = this.length;
    checkbox.dataset.swingweight = this.swingweight;
    checkbox.dataset.stringpattern = this.stringPattern;
    checkbox.dataset.stiffness = this.stiffness;
    checkbox.dataset.strength = this.strength;
  }
}
