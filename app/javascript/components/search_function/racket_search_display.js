import {RacketSearch, Racket, Pagination} from './search_function_file_manager'
import {Comparator} from '../comparator_manager/comparator_file_manager'
import {AnimateThatSearch} from '../effects/animate_that_search'

export class RacketSearchDisplay extends RacketSearch {
  constructor(checkboxInputs, searchbar, page, rackets) {
    super(checkboxInputs, searchbar, page);
    this.rackets = rackets;
  }

  async racketsUpdate() { //The idea here is to update the container only with the cards that need to be added or removed and not to remove every card from the container and add them all again. That way we can apply some effects to the remaining cards. Therefore, it compares the rackets present in container with the racket fetched (json) and then add or remove rackets to the container with the correct style.
    // console.log("racketsUpdate")
    const racketIndexFetch = await super.racketFetch(); // First, we fetch the searched rackets and the pagination in the database (json object).
    const racketFetched = racketIndexFetch.rackets;
    console.log(racketFetched)
    const pagesNumber = racketIndexFetch.pages;

    // Then we look for the rackets to remove and the ones to add to the container.
    const racketsToRemove = this.racketsToRemove(racketFetched); // rackets to remove = displayed rackets in the container that are not in the fetched rackets
    const racketsToAdd = this.racketsToAdd(racketFetched); // rackets to add = fetched rackets that are not in the displayed rackets in the container

    this.removeRackets(racketsToRemove); // We know what racket to remove, so let's remove them from the container before adding new ones.

    const racketCardsToAdd = this.createRacketCardsToInsert(racketsToAdd); // We also know what racket to add, so lets create the cards and add them
    this.insertRacketCards(racketCardsToAdd);

    const gridContainer = document.querySelector('.select-racket');
    const animateThatSearch = new AnimateThatSearch(this.rackets, racketFetched, gridContainer, ".racket-card", "racket-checkbox", 4); // Now lets apply style to the cards that remained in the container and that were not removed nor added.
    animateThatSearch.applyTranslation();

    const pagination = new Pagination(this.page, pagesNumber); // Finally let's not forget the pagination that has to take place each time we filter through the rackets.
    pagination.initPagination();

    return
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
    racketsToAdd.forEach((racketObj, i) => {
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

  insertRacketCards(cards) { //inserts rackets in the container at the right position according to the index
    const container = document.querySelector(".select-racket");
    const cardsAdded = [];

    cards.forEach(card => {
      const position = new AnimateThatSearch();
      position.columnsAmount = 4;
      const cardPosition = position.positionning(card[1]);
      card[0].style.gridColumnStart = cardPosition.column;
      card[0].style.gridRowStart = cardPosition.row;
      const cardFinalIndex = (Number(cardPosition.row)-1) * 4 +  Number(cardPosition.column) - 1;

      card[0].style.animation = `${cardFinalIndex/30}s linear 0s stayWhite, 0.25s ease-in-out ${cardFinalIndex/30}s slideIn`

      container.insertBefore(card[0], container.children[card[1] + 2]);
      cardsAdded.push(card[0])
    });

    return cardsAdded
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
    const racketIdsToRemove = racketsToRemove.map(racket => racket = racket.id);
    this.rackets.forEach(racket =>{
      if (racketIdsToRemove.includes(racket.id)) {
        racket.closest('.racket-card').remove();
      };
    });
  }
}