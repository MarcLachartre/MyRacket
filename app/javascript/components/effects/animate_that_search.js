export class AnimateThatSearch {
  constructor(initialItemsArray, finalItemsArray, gridContainer, cardSelector, nodeIdSelector, columnsAmount) {
    this.initialItemsArray = initialItemsArray; // has to be a nodelist containing an input (checkbox) with the id
    this.finalItemsArray = finalItemsArray; // has to be an array made of obects containing the id of the final items 
    this.gridContainer = gridContainer; // is the grid containing the items to animate
    this.cardSelector = cardSelector; // is the class selector/name of the card (with the dot at the beginning), the highest node of the card.
    this.nodeIdSelector = nodeIdSelector; // is teh selector name of the node (without the dot at the beginning).
    this.columnsAmount = columnsAmount; // the amount of columns the grid contains

    // console.log(this.initialItemsArray = initialItemsArray); // has to be a nodelist containing an input (checkbox) with the id
    // console.log(this.finalItemsArray = finalItemsArray); // has to be an array made of obects containing the id of the final items 
    // console.log(this.gridContainer = gridContainer); // is the grid containing the items to animate
    // console.log(this.cardSelector = cardSelector); // is the class selector/name of the card (with the dot at the beginning), the highest node of the card.
    // console.log(this.nodeIdSelector = nodeIdSelector); // is teh selector name of the node (without the dot at the beginning).
    // console.log(this.columnsAmount = columnsAmount); // the amount of columns the grid contains


  }

  applyTranslation() { // This function applies the style (translation) to the items that are left in the grid container (items that are not removed and not added, the remaining items) 
    console.log('app translation started')
    
    this.initItemsPosition(); // First, it takes the initial items in the container (before filtering/searching), and it makes sure they have their grid position (row start and column start) and no transform/translate effect
    const itemsArrayToTranslate = this.itemsArrayToTranslate(); // Then, we select the items left in the container and creates the remainingItemsArray containing, the item card, both initial and final grid positions, and the index of the item
    const gridCellSize = this.gridCellSize(); // We calculate the grid cell size, combined with the future grid position of the items to translate, we can calculate the translation vector
    this.containerResizing(gridCellSize.height); // This is necessary to make sure the container always has the right size and that the items below are not overlaping the grid
    
    itemsArrayToTranslate.forEach((i, index) => {
      const translationVector = this.translationVector(i.initialCardPosition, i.finalCardPosition, gridCellSize); // Now let's get the translation vector for each item to translate and lets apply it below with the desired style
      i.card.style.setProperty("transition", `transform 0.35s ease-in-out ${index/30}s` , "important");
      i.card.style.setProperty("transform", "translate(" + String(translationVector.vectorX) + "px," + String(translationVector.vectorY) + "px)" , "important");
    });
  }

  initItemsPosition() {
    this.initialItemsArray.forEach((racket, index) => {
      const position = this.positionning(index);
      racket.closest(this.cardSelector).style.gridColumnStart = position.column;
      racket.closest(this.cardSelector).style.gridRowStart = position.row;
      racket.closest(this.cardSelector).style.transform = null;
      racket.closest(this.cardSelector).style.transition = null;
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
          if (document.getElementById(item[0].id).classList[0] === this.nodeIdSelector) {
            card = document.getElementById(item[0].id).closest(this.cardSelector);  
            } else {
            const id =  String(item[0].id)
            card = this.gridContainer.querySelector(`input[id="${id}"]`).closest(this.cardSelector);
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
    const containerPadding = Number(window.getComputedStyle(this.gridContainer, null).getPropertyValue('padding').slice(0, -2));

    const height = Number(window.getComputedStyle(this.gridContainer, null).getPropertyValue('grid-auto-rows').slice(0, -2));

    const width = (Number(this.gridContainer.getBoundingClientRect().width) - Number(containerPadding) * 2)/(this.columnsAmount);
    
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
    
    // console.log(gridCellSize.height)
    // console.log(coeffY)
    const vectorX = gridCellSize.width * coeffX;
    const vectorY = gridCellSize.height * coeffY;
    const vector = {vectorX, vectorY};

    return vector
  }

  positionning(index) { // this function retrieves the grid position of the item according to its position in its array
    let cardPosition = index;
    let rowPosition = Math.floor((cardPosition/this.columnsAmount)+1);
    // console.log(rowPosition)
    let columnPosition = cardPosition;
    if (cardPosition > (this.columnsAmount -1)) {
      do {
        cardPosition -= this.columnsAmount;
          columnPosition = cardPosition;
      } while (cardPosition >= this.columnsAmount)
    } else {
      columnPosition = cardPosition;
    }

    columnPosition = String(columnPosition + 1);
    rowPosition = String(rowPosition);

    const position = {row: rowPosition, column: columnPosition};
    return position
  }

  containerResizing(gridCellHeight) { // Defines the final size of the container when necessary
    if (this.initialItemsArray.length <= this.finalItemsArray.length) {
      const containerHeight = Number(gridCellHeight * Math.ceil(this.finalItemsArray.length/4));
      const containerPadding = Number(window.getComputedStyle(this.gridContainer, null).getPropertyValue("padding").slice(0, -2));
      this.gridContainer.style.height = String(containerHeight + containerPadding * 2) + "px";
    }
  }
}