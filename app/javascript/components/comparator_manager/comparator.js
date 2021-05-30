import { AnimateThatSearch } from '../effects/animate_that_search';
import {ComparatorDisplay, RacketComparision} from './comparator_file_manager';
// console.log(module.loaded)

export class Comparator {
  constructor() {
    this.racketsInComparator = document.querySelector('.racket-comparator-container').querySelectorAll('input.compared-racket-checkbox');
  }

  initOnLoad() {
    const comparatorDisplay = new ComparatorDisplay();
    
    comparatorDisplay.init(); // initialization of comparator display ( add envent listeners to open/close it)
    this.racketsInComparator.forEach(checkbox => {
      this.addRemoveCardListener(checkbox); //add listener to cards in comparator (to remove them)
    });
    document.querySelectorAll('.racket-checkbox').forEach(racket => {
      this.addComparisionListener(racket);
    });
    this.isEnabled(document.querySelectorAll('.racket-checkbox'));
    this.cardTranslateIn();
    this.positionningCardsInGrid(document.querySelectorAll(".short-comparator-racket-card"));
    this.positionningCardsInGrid(document.querySelectorAll(".compared-racket-cards-container"));
    this.containerResizing(".short-comparator-racket-card");
    this.containerResizing(".compared-racket-cards-container");
  }

  positionningCardsInGrid(cards) {
    for (let i = 0; i < cards.length; i++) {
      const position = new AnimateThatSearch();
      position.columnsAmount = 5;
      const column = position.positionning(i).column;
      const row = position.positionning(i).row;

      cards[i].style.gridColumnStart = `${column}`;
      cards[i].style.gridRowStart = `${row}`;
    }
  }

  containerResizing(cardsSelector) {
    const initCardsPositions = new AnimateThatSearch();
    initCardsPositions.cardSelector = cardsSelector;
    initCardsPositions.columnsAmount = 5;
    initCardsPositions.resizingSetCardsState(cardsSelector)
  }

  animateSearch(initialComparedRacketCheckboxes, columsAmount, removedElement) { // this function prepares the compared racket cards to be animated with the AnimateThatSearch class and retrieves every variable with the right format to pass as AnimateThatSearch class variable (for more info see AnimateThatSearch class). First argument needs to be the node list of the compared racket checboxes contained in the displayed comparator. Second arg is the element to remove. Third is the node element to remove. 
    // console.log("animatesearch") 
    const finalComparedRacketsIdsObj = (nodeList) => {
      const arrayObj = [];
      const finalComparedRacketsIdsArray = nodeList.map(el => Number(el.id));
      finalComparedRacketsIdsArray.forEach((el) => { arrayObj.push({id: el})}); 
      return arrayObj
    } 

    const arg = () => {
      if (removedElement.closest(".short-comparator-racket-card") === null) {
        return {finalComparedRacketsIdsObj: finalComparedRacketsIdsObj(Array.from(document.querySelector(".racket-comparator").querySelectorAll(".compared-racket-checkbox"))), cardSelector: ".compared-racket-cards-container", container: document.querySelector(".racket-comparator")};
      } else {
        return {finalComparedRacketsIdsObj: finalComparedRacketsIdsObj(Array.from(document.querySelector(".short-displayed-rackets").querySelectorAll(".compared-racket-checkbox"))), cardSelector: ".short-comparator-racket-card", container: document.querySelector(".short-displayed-rackets")};
      }
    }

    const setInitialState = (node) => {
      for (let i = 0; i < node.length; i++) {
        node[i].style.webkitAnimation = "none";
        node[i].style.webkitAnimationDelay = "none";
        node[i].style.webkitAnimationFillMode = "none";
        node[i].style.opacity = "1";
      };
    };

    const setFinalState = (nodes) => {
      this.positionningCardsInGrid(nodes);
      nodes.forEach(node => {
        node.style.transition = "none";
        node.style.transform = "none";      
      }); 
    } 
    
    setInitialState(document.querySelectorAll(".short-comparator-racket-card"));
    setInitialState(document.querySelectorAll(".compared-racket-cards-container"));

    const animateThatSearch = new AnimateThatSearch(initialComparedRacketCheckboxes, arg().finalComparedRacketsIdsObj, arg().container, arg().cardSelector, "racket-checkbox", columsAmount); // Now lets apply style to the cards that remaining in the container and that were not removed nor added.
    animateThatSearch.applyTranslation();

    if (arg().container === document.querySelector(".racket-comparator")) {
      setFinalState(document.querySelectorAll(".short-comparator-racket-card"));   
    } else {  
      setFinalState(document.querySelectorAll(".compared-racket-cards-container"));
    }
  }

  addComparisionListener(racket) { // this function initializes comparisions. it takes as an argument each racket in the rackets container and the ones added by the search. Then on comparision button click it adds a racket to the comparator or removes it
    racket.addEventListener("change", (event) => { //adds event listener to each rackets so that on click it does the following (see comments)
      
      
      const racketComparision = new RacketComparision(racket.dataset.brand, racket.dataset.model, racket.dataset.strength, racket.dataset.weight, racket.dataset.headsize, racket.dataset.stringpattern, racket.dataset.balance, racket.dataset.length, racket.dataset.swingweight, racket.dataset.stiffness, racket.dataset.id);
      if (this.reachedMaxCapacity() === false && this.isAlreadyInComparator(racket) === false) {  // if comparator didnt reach max capacity and racket is not already in comparator, create a racket comparision with the racket dataset, add it to comparator
        racketComparision.addRacketToComparator();
        if (document.querySelector(".empty-comparator") != null) {
          document.querySelector(".empty-comparator").style.display = "none"; //removes empty comparator message
          document.querySelector(".short-displayed-rackets").style.display = "grid"
        }
      } else if (this.isAlreadyInComparator(racket) === true) { // if racket is already in comparator, lets remove it from there(remove compared racket method checks if comparator is full, if true, removing the racket will enable the comparision of rackets)
        this.removeComparedRacket(event);
        if (Array.from(document.querySelector(".short-displayed-rackets").querySelectorAll(".short-comparator-racket-card")).length === 0) {
          document.querySelector(".empty-comparator").style.display = "flex"; //adds empty comparator message, if there are no compared rackets
          document.querySelector(".short-displayed-rackets").style.display = "none"
        }
      };
      this.isEnabled(document.querySelectorAll('.racket-checkbox'));
    });
  }

  isAlreadyInComparator(racket) {
    return this.racketsCompared().includes(racket.id) ? true : false
  }

  racketsCompared() { //returns the racket ids that are in the comparator
    const updatedRacketsInComparator = document.querySelectorAll('input.compared-racket-checkbox');
    const racketIdsInComparator = [];
    for (let racket of updatedRacketsInComparator.values()) {
      if (racketIdsInComparator.includes(racket.id) === false) {
        racketIdsInComparator.push(racket.id);
      };
    };
    return racketIdsInComparator
  }

  addRemoveCardListener(checkbox) {  // this function adds an event listen on the rackets already present in or added to the comparator to remove them
  // console.log("add remove card listener");
    checkbox.addEventListener('change', (event) => {
      this.removeComparedRacket(event);
      if (Array.from(document.querySelector(".short-displayed-rackets").querySelectorAll(".short-comparator-racket-card")).length === 0) {
        document.querySelector(".empty-comparator").style.display = "flex"; //adds empty comparator message, if there are no compared rackets
        document.querySelector(".short-displayed-rackets").style.display = "none"
      }
    });
  }

  removeComparedRacket(event) {
    // console.log("remove compared racket")
    const checkboxes = () => {  
      if (event.target.closest(".short-comparator-racket-card") !== null || event.target.closest(".racket-compare-button") !== null) {
        return document.querySelector(".short-displayed-rackets").querySelectorAll(".compared-racket-checkbox");
      } else {
        return document.querySelector(".racket-comparator").querySelectorAll(".compared-racket-checkbox");
      };
    };

    const initialComparedCheckboxes = checkboxes();

    const racketsCompared = document.querySelectorAll('input.compared-racket-checkbox');
    if (this.reachedMaxCapacity() === true) {
      document.querySelectorAll('.racket-checkbox').forEach(racket => {
        this.enableComparision(racket);
      });
    };

    let cardToRemove = ""
    for (let checkbox of racketsCompared.values()) {
      if (event.target.id == checkbox.id && checkbox.closest(".compared-racket-cards-container") !== null) {
        checkbox.closest(".compared-racket-cards-container").remove();
      } else if (event.target.id == checkbox.id && checkbox.closest(".compared-racket-cards-container") === null) {
        cardToRemove = checkbox.closest(".short-comparator-racket-card");
        checkbox.closest(".short-comparator-racket-card").remove();
      }
    }

    if (event.target.className === "compared-racket-checkbox") {
      this.animateSearch(initialComparedCheckboxes, 5, event.target);
    } else if (event.target.className === "racket-checkbox") {
      this.animateSearch(initialComparedCheckboxes, 5, cardToRemove);
    }
  }

  cardTranslateIn() {
  const cards = document.querySelectorAll(".short-comparator-racket-card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.animation = "0.6s ease-out translateIn";
      cards[i].style.animationFillMode = "forwards";
      cards[i].style.webkitAnimationDelay = `${i*250}ms`;
    }
  }

  isEnabled(rackets) { // enable or disable racket comparision depending on the amount of rackets that are in the comparator
    rackets.forEach(racket => {
      if (this.reachedMaxCapacity() && this.racketsCompared().includes(racket.id) === false) {
        this.disableComparision(racket);
        // console.log(`is enabled false`)
        return false
      } else {
        this.enableComparision(racket);
        // console.log(`is enabled true`)
        return true
      };
    });
  }

  reachedMaxCapacity() {
    const comparedRackets = document.querySelectorAll(".short-comparator-racket-card");
    return comparedRackets.length >= 5 ? true : false
  }

  disableComparision(racket) {
    // console.log("disableComparision")
    racket.disabled = true;
    racket.closest(".racket-card").classList.add("racket-card-disabled");
    racket.closest(".racket-checkbox-label").classList.add("racket-checkbox-label-disabled");
    racket.closest(".button-up").classList.add("button-up-disabled");
  }

  enableComparision(racket) {
  // console.log("enableComparision")
    racket.disabled = false;
    racket.closest(".racket-card").classList.remove("racket-card-disabled");
    racket.closest(".racket-checkbox-label").classList.remove("racket-checkbox-label-disabled");
    racket.closest(".button-up").classList.remove("button-up-disabled");
  }
}
