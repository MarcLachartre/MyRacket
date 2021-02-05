import {ElementReveal} from '../effects/element_reveal';
import {RacketSearch, Racket, Pagination} from './search_function_file_manager'
import {Comparator} from '../comparator_manager/comparator_file_manager'

export class RacketSearchDisplay extends RacketSearch {
  constructor(checkboxInputs, searchbar, page, rackets) {
    super(checkboxInputs, searchbar, page);
    this.rackets = rackets;
  }

  async racketsUpdate() { //The idea here is to update the container only with the cards that need to be added or removed and not to remove every card from the container and add them all again so that we can apply some effects. Therefore, it compares the rackets present in container with the racket fetched and then add or remove rackets to the container with the correct style.
    // console.log("racketsUpdate")
    const racketIndexFetch = await super.racketFetch(); // First, we fetch the searched rackets in the database.
    const racketFetched = racketIndexFetch.rackets;
    const pagesNumber = racketIndexFetch.pages;
    
    // const elementReveal = new ElementReveal();
    const initialRacketsArray = Array.prototype.slice.call(document.querySelectorAll('.racket-card'))
    initialRacketsArray.forEach((racket, index) => {
      this.positionning(racket, index)
    })
    // Then we look for the rackets to remove and the ones to add to the container.
    const racketsToRemove = this.racketsToRemove(racketFetched);  // rackets to remove = displayed rackets in the container that are not in the fetched rackets
    const racketsToAdd = this.racketsToAdd(racketFetched); // rackets to add = fetched rackets that are not in the displayed rackets in the container

    await this.removeRackets(racketsToRemove); // We know what racket to remove, so let's remove them from the container before adding new ones.

    const racketsAfterRemove = Array.prototype.slice.call(document.querySelectorAll('.racket-card'));
    
    // this.positionning(racketsAfterRemove)
    // console.log(racketsAfterRemove)
    // elementReveal.isOnScreen(racketsAfterRemove);

    const racketCardsToAdd = await this.createRacketCardsToInsert(racketsToAdd);

    // console.log(racketCardsToAdd)
    // cool we have the cards, lets add them
    const allRacketsDisplayed = Array.prototype.slice.call(document.querySelectorAll('.racket-card'));

    this.insertRacketCards(racketCardsToAdd);

    const racketsAdded = [];
    for (let i = 0; i < allRacketsDisplayed.length; i++) {
      if (racketsAfterRemove.includes(allRacketsDisplayed[i]) === false) {
        racketsAdded.push(allRacketsDisplayed[i]);
      }
    }

    this.racketsLeft(racketFetched);

    // const revealEffect = {distance: '150px', duration: 400, easing: 'cubic-bezier(.55,0,.5,.99)', origin: 'bottom', opacity: '0'};
    // elementReveal.listReveal(racketsAdded, revealEffect, 50);

    const pagination = new Pagination(this.page, pagesNumber);
    pagination.initPagination();

    return
  }

  racketsLeft(racketFetched) {
    const initialRacketsArray = Array.from(this.rackets).map((racket, index) => [Number(racket.id), index]);
    const finalRacketsArray = racketFetched.map((racket, index) => [racket.id, index] );

    const racketsToTransform = [];
    initialRacketsArray.forEach((racket) => {
      finalRacketsArray.forEach((r) => {
      if (racket[0] === r[0]) {
        racketsToTransform.push([racket, r[1]]);
        const card = document.getElementById(racket[0]).closest('.racket-card')
        this.positionning(document.getElementById(racket[0]).closest('.racket-card'), r[1])
        };
      });
    });
  }

  racketsToAdd(racketFetched) { // rackets to add = fetched rackets that are not in the displayed rackets
    const racketsToAdd = [];
    const racketIdsDisplayed = [];
    this.rackets.forEach(racket => racketIdsDisplayed.push(Number(racket.dataset.id)));

    racketFetched.forEach((racket, i) => {
      if (racketIdsDisplayed.includes(racket.id) === false) {
        racket.index = Number(i);
        racketsToAdd.push(racket);
      };
    });
    return racketsToAdd
  }

  createRacketCardsToInsert(racketsToAdd) { //This method creates a Racket object and therefore the cards that are the result of the search. First it creates a racket object, then we create the card with the right style (racket is in comparator or not). We also add the event listener to each card for it to be properly working (cookie event listener)
    const racketCardsToInsert = [];
    racketsToAdd.forEach(racketObj => {
      const racket = new Racket(racketObj.id, racketObj.brand, racketObj.model, racketObj.weight, racketObj.string_pattern, racketObj.balance, racketObj.headsize, racketObj.length, racketObj.swingweight, racketObj.stiffness, racketObj.power, racketObj.manoeuvrability, racketObj.comfort, racketObj.control, racketObj.index);
      const card = racket.createCard(); //this creates the card and adds the listeners to the button (add comparision event listener)
      
      const comparator = new Comparator();

      if (comparator.isAlreadyInComparator(card.querySelector('.racket-checkbox'))) {
        racket.selectedCardStyle(card.querySelector('.racket-checkbox'));
      };

      if (document.querySelectorAll(".compared-racket-checkbox").length >= 10) {
        comparator.disableComparision(card.querySelector('.racket-checkbox'));
      };
      racketCardsToInsert.push([card, racketObj.index]);
    });
    return racketCardsToInsert
  }

  racketsToRemove(racketFetched) {
    const racketsToRemove = [];
    const racketIdsFetched = racketFetched.map(racket => racket = racket.id);

    this.rackets.forEach(racket => {
      if (racketIdsFetched.includes(Number(racket.dataset.id)) === false) {
        racketsToRemove.push(racket);
      };
    });
    return racketsToRemove
  }

  removeRackets(racketsToRemove) {
    // console.log('removeRackets')
    const racketIdsToRemove = racketsToRemove.map(racket => racket = racket.id);
    this.rackets.forEach(racket =>{
      if (racketIdsToRemove.includes(racket.id)) {
        racket.closest('.racket-card').remove();
      };
    });
  }

  insertRacketCards(cards) { //inserts rackets in the container at the right position
    const racketsInContainer = document.querySelectorAll(".racket-checkbox");
    const container = document.querySelector(".select-racket");

    cards.forEach(card => {
    // if (racketsInContainer.length === 0) {
      // card.style.visibility = "hidden";
      this.positionning(card[0], card[1]);
      container.appendChild(card[0]);
    });
  }

  positionning(card, index) {
    let cardPosition = index;
    console.log(index)
    let rowPosition = Math.floor((cardPosition/4)+1);
    
    let columnPosition = cardPosition
    if (cardPosition > 3) {
      do {
        cardPosition -= 4;
          columnPosition = cardPosition;
      } while (cardPosition >= 4)
    } else {
      columnPosition = cardPosition;
    }

    columnPosition = String(columnPosition + 1)
    rowPosition = String(rowPosition)

    card.style.gridColumnStart = columnPosition;
    card.style.gridRowStart = rowPosition;
  }
}
