import { AnimateThatSearch } from '../effects/animate_that_search';
import {ComparatorDisplay, RacketComparision} from './comparator_file_manager';

// console.log('Comparator');
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
    this.positionningCardsInGrid();
  }

  positionningCardsInGrid() {
    const initialComparedRacketCards = document.querySelector(".short-displayed-rackets").querySelectorAll(".short-comparator-racket-card");

    for (let i = 0; i < initialComparedRacketCards.length; i++) {
      const position = new AnimateThatSearch();
      position.columnsAmount = 5;
      const column = position.positionning(i).column;
      const row = position.positionning(i).row;

      initialComparedRacketCards[i].style.gridColumnStart = `${column}`;
      initialComparedRacketCards[i].style.gridRowStart = `${row}`;
    }
  }

  animateSearch(initialComparedRacketCheckboxes, finalComparedRacketsIdsObj) {
    for (let i = 0; i < document.querySelectorAll(".short-comparator-racket-card").length; i++) {
      console.log(document.querySelectorAll(".short-comparator-racket-card")[i])
      document.querySelectorAll(".short-comparator-racket-card")[i].style.webkitAnimation = "none"
      document.querySelectorAll(".short-comparator-racket-card")[i].style.webkitAnimationDelay = "none"
      document.querySelectorAll(".short-comparator-racket-card")[i].style.webkitAnimationFillMode = "none"
      document.querySelectorAll(".short-comparator-racket-card")[i].style.opacity = "1"
    }
    const animateThatSearch = new AnimateThatSearch(initialComparedRacketCheckboxes, finalComparedRacketsIdsObj , document.querySelector(".short-displayed-rackets"), ".short-comparator-racket-card", "racket-checkbox", 5); // Now lets apply style to the cards that remaining in the container and that were not removed nor added.
    animateThatSearch.applyTranslation();
  }

  addComparisionListener(racket) { // this function initializes comparisions. it takes as an argument each racket in the rackets container and the ones added by the search. Then on comparision button click it adds a racket to the comparator or removes it
    racket.addEventListener("change", (event) => { //adds event listener to each rackets so that on click it does the following (see comments)
      const racketComparision = new RacketComparision(racket.dataset.brand, racket.dataset.model, racket.dataset.headsize, racket.dataset.stringpattern, racket.dataset.weight, racket.dataset.length, racket.dataset.swingweight, racket.dataset.stiffness, racket.dataset.power, racket.dataset.manoeuvrability, racket.dataset.comfort, racket.dataset.control, racket.dataset.id);
      if (this.reachedMaxCapacity() === false && this.isAlreadyInComparator(racket) === false) {  // if comparator didnt reach max capacity and racket is not already in comparator, create a racket comparision with the racket dataset, add it to comparator
        racketComparision.addRacketToComparator();

      } else if (this.isAlreadyInComparator(racket) === true) { // if racket is already in comparator, lets remove it from there(remove compared racket method checks if comparator is full, if true, removing the racket will enable the comparision of rackets)
        this.removeComparedRacket(event);
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
    });
  }

  removeComparedRacket(event) {
    console.log("remove compared racket")
    const initialComparedRacketCheckboxes = document.querySelector(".short-displayed-rackets").querySelectorAll(".compared-racket-checkbox");
    const racketsCompared = document.querySelectorAll('input.compared-racket-checkbox');
    if (this.reachedMaxCapacity() === true) {
      document.querySelectorAll('.racket-checkbox').forEach(racket => {
        this.enableComparision(racket);
      });
    };

    for (let card of racketsCompared.values()) {
      if (event.target.id == card.id) {
        card.parentElement.parentElement.remove();
      };
    };
    const finalComparedRackets = document.querySelector(".short-displayed-rackets").querySelectorAll(".compared-racket-checkbox");
    const finalComparedRacketsIds = Array.from(finalComparedRackets).map((el) => Number(el.id))
    const finalComparedRacketsIdsObj = [];
    finalComparedRacketsIds.forEach(el => {
      finalComparedRacketsIdsObj.push({id: el})
    });

    this.animateSearch(initialComparedRacketCheckboxes, finalComparedRacketsIdsObj);
  }

  cardTranslateIn() {
    const cards = document.querySelectorAll(".short-comparator-racket-card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.animationDelay = `${i*250}ms`
    }
  }

  isEnabled(rackets) { // enable or disable racket comparision depending on the amount of rackets that are in the comparator
    rackets.forEach(racket => {
      if (this.reachedMaxCapacity()) {
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
    if (this.racketsCompared().includes(racket.id) === false) {
      racket.disabled = true;
      racket.closest(".racket-card").classList.add("racket-card-disabled");
      racket.closest(".racket-checkbox-label").classList.add("racket-checkbox-label-disabled");
      racket.closest(".button-up").classList.add("button-up-disabled");
    };
  }

  enableComparision(racket) {
  // console.log("enableComparision")
    racket.disabled = false;
    racket.closest(".racket-card").classList.remove("racket-card-disabled");
    racket.closest(".racket-checkbox-label").classList.remove("racket-checkbox-label-disabled");
    racket.closest(".button-up").classList.remove("button-up-disabled");
  }
}
