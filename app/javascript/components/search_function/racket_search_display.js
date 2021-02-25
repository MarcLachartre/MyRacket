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

    // this.rackets.forEach((racket, index) => {
    //   const ats = new AnimateThatSearch();
    //   const position = ats.positionning(index);
    //   racket.closest('.racket-card').style.gridColumnStart = position.column;
    //   racket.closest('.racket-card').style.gridRowStart = position.row;
    //   racket.closest('.racket-card').style.transform = null;
    //   racket.closest('.racket-card').style.transition = null;
    // });
    // Then we look for the rackets to remove and the ones to add to the container.
    const racketsToRemove = this.racketsToRemove(racketFetched);  // rackets to remove = displayed rackets in the container that are not in the fetched rackets
    const racketsToAdd = this.racketsToAdd(racketFetched); // rackets to add = fetched rackets that are not in the displayed rackets in the container

    await this.removeRackets(racketsToRemove); // We know what racket to remove, so let's remove them from the container before adding new ones.

    const racketCardsToAdd = await this.createRacketCardsToInsert(racketsToAdd);

    // cool we have the cards, lets add them
    const cardsAdded = this.insertRacketCards(racketCardsToAdd);

    const gridContainer = document.querySelector('.select-racket')
    const animateThatSearch = new AnimateThatSearch(this.rackets, racketFetched, gridContainer);
    animateThatSearch.applyTranslation();

    const pagination = new Pagination(this.page, pagesNumber);
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
    // console.log('removeRackets')
    const racketIdsToRemove = racketsToRemove.map(racket => racket = racket.id);
    this.rackets.forEach(racket =>{
      if (racketIdsToRemove.includes(racket.id)) {
        racket.closest('.racket-card').remove();
      };
    });
  }
}

class AnimateThatSearch {
  constructor(initialItemsArray, finalItemsArray, gridContainer) {
    this.initialItemsArray = initialItemsArray; // has to be a nodelist containing an id
    this.finalItemsArray = finalItemsArray; // has to be an array made of the future items list details containing an id
    this.gridContainer = gridContainer; // is the grid containing the items to animate
  }

  applyTranslation() { // This function applies the style (translation) to the items that are left in the grid container (items that are not removed and not added, the remaining items) 
    console.log('app translation started')
    
    
    this.initItemsPosition(); // First, it takes the initial items in the container (before filtering/searching), and it makes sure they have their grid position (row start and column start) and no transform/translate effect
    const itemsArrayToTranslate = this.itemsArrayToTranslate(); // Then, we select the items left in the container and creates the remainingItemsArray containing, the item card, both initial and final grid positions, and the index of the item
    const gridCellSize = this.gridCellSize(); // We calculate the grid cell size, combined with the future grid position of the items to translate, we can calculate the translation vector
    this.containerResizing(gridCellSize.height); // This is necessary to make sure the container always has the right size and that the items below are not overlaping the grid
    
    itemsArrayToTranslate.forEach((i, index) => {
      const translationVector = this.translationVector(i.initialCardPosition, i.finalCardPosition, gridCellSize); // Now let's get the translation vector for each item to translate and lets apply it below with the desired style
      i.card.style.transitionDelay = String((index)) + "s";
      i.card.style.transition = `transform 0.25s ease-in-out ${index/25}s`;
      i.card.style.transform = "translate(" + String(translationVector.vectorX) + "px," + String(translationVector.vectorY) + "px)";
    });
  }

  initItemsPosition() {
    this.initialItemsArray.forEach((racket, index) => {
      const position = this.positionning(index);
      racket.closest('.racket-card').style.gridColumnStart = position.column;
      racket.closest('.racket-card').style.gridRowStart = position.row;
      racket.closest('.racket-card').style.transform = null;
      racket.closest('.racket-card').style.transition = null;
    });
  }

  itemsArrayToTranslate() { // This function selects the items left in the container and creates the remainingItemsArray containing, the item card, both initial and final grid positions, and the index of the item
    const initialItemsArray = Array.prototype.slice.call(this.initialItemsArray).map((item, index) => [item, index]);
    const finalItemsArray = this.finalItemsArray.map((item, index) => [item, index]);
    const remainingItemsArray = [];

    initialItemsArray.forEach((item) => { 
      finalItemsArray.forEach((i) => {
        if (Number(item[0].id) === Number(i[0].id)) {
          
          let card = '';
          if (document.getElementById(item[0].id).classList[0] === 'racket-checkbox') {
            card = document.getElementById(item[0].id).closest('.racket-card');  
            } else {
            const id =  String(item[0].id)
            card = this.gridContainer.querySelector(`input[id="${id}"]`).closest('.racket-card');
            }

          const initialCardPosition = this.positionning(item[1]);
          const finalCardPosition = this.positionning(i[1]);
          remainingItemsArray.push({itemIndex: i[1], initialCardPosition: initialCardPosition, finalCardPosition: finalCardPosition, card: card});
        };
      });
    });

    return remainingItemsArray
  }

  gridCellSize() { // give the size of the grid cell size so that we can establish the distance necessary to place cards
    const columnsAmount = 4;
    
    const container = document.querySelector('.select-racket');
    const containerPadding = Number(window.getComputedStyle(container, null).getPropertyValue('padding').slice(0, -2));

    const height = Number(window.getComputedStyle(container, null).getPropertyValue('grid-auto-rows').slice(0, -2));

    const width = (Number(container.getBoundingClientRect().width) - Number(containerPadding) * 2)/(columnsAmount);
    const gridCellSize = {height: height, width: width};

    return gridCellSize
  }

  translationVector(initialCardPosition, finalCardPosition, gridCellSize) { // combined with the grid cell size and the inittial and final grid position, this function calculates the translante vector to animate the items in the grid
    let coeffX = 0;
    let coeffY = 0;

    const initialColumnPosition = initialCardPosition.column;
    const initialRowPosition = initialCardPosition.row;
    
    const finalColumnPosition = finalCardPosition.column;
    const finalRowPosition = finalCardPosition.row;

    if (finalColumnPosition > initialColumnPosition) {
      coeffX = finalColumnPosition - initialColumnPosition;
    } else {
      coeffX = - (initialColumnPosition - finalColumnPosition);
    };
    
    if (finalRowPosition > initialRowPosition) {
      coeffY = finalRowPosition - initialRowPosition;
    } else {
      coeffY = - (initialRowPosition - finalRowPosition);
    }

    const vectorX = gridCellSize.width * coeffX;
    const vectorY = gridCellSize.height * coeffY;
    const vector = {vectorX, vectorY};

    return vector
  }

  positionning(index) { // this function retrieves the grid position of the item according to its position in its array
    let cardPosition = index;
    let rowPosition = Math.floor((cardPosition/4)+1);
    
    let columnPosition = cardPosition;
    if (cardPosition > 3) {
      do {
        cardPosition -= 4;
          columnPosition = cardPosition;
      } while (cardPosition >= 4)
    } else {
      columnPosition = cardPosition;
    }

    columnPosition = String(columnPosition + 1);
    rowPosition = String(rowPosition);

    const position = {row: rowPosition, column: columnPosition};
    
    return position
  }

  containerResizing(gridCellHeight) { // Defines the final size of the container when necessary
    if (this.initialItemsArray.length < this.finalItemsArray.length) {
      const containerHeight = Number(gridCellHeight * Math.round(this.finalItemsArray.length/4));
      const containerPadding = Number(window.getComputedStyle(this.gridContainer, null).getPropertyValue("padding").slice(0, -2));
      this.gridContainer.style.height = String(containerHeight + containerPadding * 2) + "px";
    }
  }
}