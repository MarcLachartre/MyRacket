import {RacketCardStyleSelector} from '../racket_cards/racket_card_style_selector';
import {Comparator} from './comparator_file_manager';
import {ComparedRacketCookie} from '../cookies_manager/compared_racket_cookies'
// console.log('RacketComparision')
export class RacketComparision extends Comparator {
  constructor(brand, model, headsize, stringpattern, weight, length, swingweight, stiffness, power, manoeuvrability, comfort, control, id) {
    super();
    this.brand = brand;
    this.model = model;
    this.headsize = headsize;
    this.stringpattern = stringpattern;
    this.weight = weight;
    this.length = length;
    this.swingweight = swingweight;
    this.stiffness = stiffness;
    this.power = power;
    this.manoeuvrability = manoeuvrability;
    this.comfort = comfort;
    this.control = control;
    this.id = id
  }

  addRacketToComparator() {
    // console.log("add racket to comparator")
    const shortComparator = document.querySelector('.short-displayed-rackets');
    const largeComparator = document.querySelector('.racket-comparator');
    shortComparator.appendChild(this.createShortCard());
    largeComparator.appendChild(this.createLargeCard());
  }

  positionCardInComparatorGrid() { //new rackets will always be positionned at the end on the list
    const lastGridColumnPosition = super.racketsCompared().length;
    return lastGridColumnPosition
  }

  createRemoveLabel() { // each racket in comparator should have one remove label made of one checkbox (so that we can remove it from comparator when unchecking it), its label and a delete cross item.
    const checkbox = document.createElement("input");
    const deleteLabel = document.createElement("label");
    const deleteCross = document.createElement('i');

    deleteLabel.classList.toggle("compared-racket-checkbox-label");
    deleteCross.classList.toggle("fas");
    deleteCross.classList.toggle("fa-times");
    checkbox.classList.toggle("compared-racket-checkbox");
    checkbox.type = "checkbox";
    checkbox.name = "selected_racket_id[]";
    checkbox.id = this.id;
    checkbox.value = this.id;
    checkbox.checked = "checked";
    checkbox.style.display = "none";

    super.addRemoveCardListener(checkbox);
    const cardStyle = new RacketCardStyleSelector();
    cardStyle.addCardStyleRemovalListener(checkbox); // when a racket is removed from the comparator, this removes the style from the racket card in the container (racket_card_style_selector.js)
    checkbox.addEventListener("change", (event)=> { // we add an event listener to the new created card so that on click it removes it from the comparator and the cookies.
      const selectedRacket = "selected_racket" + "=";
      const selectedRacketCookie = new ComparedRacketCookie(selectedRacket); //selected_racket.js
      selectedRacketCookie.update(event.target.id, event.target.checked);
      const comparator = new Comparator();
      comparator.isEnabled(document.querySelectorAll('.racket-checkbox'));
    });

    deleteLabel.appendChild(checkbox);
    deleteLabel.appendChild(deleteCross);

    return deleteLabel
  };

  createShortCard() {
    // console.log("create short card")
    const removeLabel = this.createRemoveLabel();
    const card = document.createElement("div");
    const brandModelContainer = document.createElement("div");

    card.classList.toggle('short-comparator-racket-card');
    brandModelContainer.classList.toggle('short-brand-model-container');

    card.appendChild(brandModelContainer);
      
    let specData = document.createElement("div");
    specData.classList.toggle("spec-data");
    brandModelContainer.appendChild(specData);

    const allSpecData = brandModelContainer.querySelectorAll(".spec-data");
    allSpecData[0].innerHTML = `${this.brand} ${this.model}`;
    card.appendChild(removeLabel);
    card.style.gridColumnStart = `${this.positionCardInComparatorGrid() + 1}`;
    card.style.gridRowStart = "1";
    return card
  }

  createLargeCard() {
    const card = document.createElement("div");
    const brandModelContainer = document.createElement("div");
    const removeLabel = this.createRemoveLabel();
    const largeComparatorRacketCard = document.createElement("div");
    const comparedRacketCardsData = document.createElement("div");

    card.classList.toggle('compared-racket-cards-container');
    largeComparatorRacketCard.classList.toggle('large-comparator-racket-card');
    brandModelContainer.classList.toggle('model-brand-container');
    comparedRacketCardsData.classList.toggle('compared-racket-cards-data');

    for (let i = 1; i < Object.keys(this).length-1; i++) {
      // console.log (this)
      if ( i < 3) {
      let specTitle = document.createElement("h4");
      specTitle.innerHTML = this[Object.keys(this)[i]];
      brandModelContainer.appendChild(specTitle);
      } else if ( 3 <= i < 12) {
      let spec = document.createElement("div");
      spec.innerHTML = this[Object.keys(this)[i]];
      spec.classList.toggle("spec");
      comparedRacketCardsData.appendChild(spec);
      };
    };

    largeComparatorRacketCard.appendChild(brandModelContainer);
    largeComparatorRacketCard.appendChild(comparedRacketCardsData);
    card.appendChild(largeComparatorRacketCard);
    card.appendChild(removeLabel);

    return card
  }
}
