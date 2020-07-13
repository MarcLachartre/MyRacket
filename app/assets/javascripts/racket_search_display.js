class RacketSearchDisplay extends RacketSearch {
  constructor(checkboxInputs, searchbar, rackets) {
    super(checkboxInputs, searchbar);
    this.rackets = rackets;
  }

  async racketsToUpdate() { //compares the rackets present and returns the rackets to remove or to add
    const racketSearchResult = await super.racketFetch();
    const allRackets = [];
    const racketIdsInContainer = [];
    const racketSearchIdsResult = [];

    this.rackets.forEach(racket => {
      allRackets.push(racket.dataset);
      racketIdsInContainer.push(racket.dataset.id)
    });

    racketSearchResult.forEach(racket => {
      allRackets.push(racket);
      racketSearchIdsResult.push(racket.id);
    });
    console.log(racketSearchResult.length)
    console.log(document.querySelectorAll('.racket-checkbox').length)
    if (this.containerIncludesRacketsSearched(racketIdsInContainer, racketSearchIdsResult) === false) { //the racket search result contains racket that are not present in the rackets container
      document.querySelectorAll(".racket-checkbox").forEach(racket => racket.closest(".racket-card").remove())
      this.addRackets(racketSearchResult);

    } else if (racketSearchResult.length > this.rackets.length) { // the search result only adds racket to the container (container doesnt contain rackets to remove)
      const racketsToUpdate = this.racketsToAdd(allRackets);
      this.addRackets(racketsToUpdate);

    } else {
      const racketsToUpdate = this.racketsToRemove(allRackets); // the search result only removes racket from the container (container only contains rackets to remove)
      this.removeRackets(racketsToUpdate);

    };
  }

  racketsToRemove(racketsArray) { //The racketsArray contains both the result of the racket search and the rackets in the container, the rackets to add are the elements with a non uniq id
    const racketsToRemove = [];
    racketsArray.sort((a,b)=>{
      return a.id - b.id
    });

    for (let i = 0; i <= (racketsArray.length -1); i++) {
      if (i > 0 && Number(racketsArray[i].id) === Number(racketsArray[i - 1].id)) {
        racketsToRemove.push(racketsArray[i-1]);
      };
    };

    return racketsToRemove
  }

  racketsToAdd(racketsArray) { //The racketsArray contains both the result of the racket search and the rackets in the container, the rackets to add are the elements with a uniq id
    const racketsToAdd = [];
    racketsArray.sort((a,b)=>{
      return a.id - b.id
    });

    const ids = [];
    for (let i = 0; i <= (racketsArray.length -1); i++) { //this iteration will add every racket to the racketsToAdd array, if the next racket id in the iteration is already in the racketsToAdd, the remove last value of racketsArray
      if (ids.includes(Number(racketsArray[i].id)) === true) {
        racketsToAdd.pop();
      } else {
        racketsToAdd.push(racketsArray[i]);
        ids.push(Number(racketsArray[i].id));
      }
    }
    return racketsToAdd
  }

  containerIncludesRacketsSearched(racketIdsInContainer, racketSearchIdsResult) {
    const includesRacketSearched = [];
    for (let i = 0; i < racketIdsInContainer.length; i++) {
      includesRacketSearched.push(racketSearchIdsResult.includes(Number(racketIdsInContainer[i])));
    };

    if (includesRacketSearched.includes(true)) {
      return true
    } else {
      return false
    }
  }

  addRackets(racketsToAdd) { //This method creates a Racket object and therefore the cards that are the result of the search. First it creates a racket object, then we create the card with the right style. We also add the event listener to each card for it to be properly working (cookie event listener)
    const racketIdsAdded = [];
    racketsToAdd.forEach(racketObj => {
      const racket = new Racket(racketObj.id, racketObj.brand, racketObj.model, racketObj.weight, racketObj.stringpattern, racketObj.balance, racketObj.headsize, racketObj.length, racketObj.swingweight, racketObj.stiffness, racketObj.power, racketObj.manoeuvrability, racketObj.comfort, racketObj.control);
      const card = racket.createCard(); //this creates the card and adds the listeners to the button (add comparision event listener)
      if (racket.isAlreadyInComparator(card.querySelector('.racket-checkbox'))) {
        racket.selectedCardStyle(card.querySelector('.racket-checkbox'));
      };

      if (document.querySelectorAll(".compared-racket-checkbox").length >= 10) {
        racket.disableComparision(card.querySelector('.racket-checkbox'));
      };
      this.insertRackets(racketObj.brand, card);
    });
  }

  removeRackets(racketsToRemove) {
    const racketIdsToRemove = racketsToRemove.map(racket => racket = racket.id);
    this.rackets.forEach(racket =>{
      if (racketIdsToRemove.includes(racket.id) === false) {
        racket.closest('.racket-card').remove();
      };
    });
  }

  insertRackets(nextRacket, card) { //inserts rackets in the container at the right alphabetical position
    const rackets = document.querySelectorAll(".racket-checkbox");
    const container = document.querySelector(".select-racket");

    if (rackets.length === 0) {
      // card.style.opacity = "0";
      container.appendChild(card);
      // fadeIn(card, 1, 0.1);
    }

    for (let i = 0; i < rackets.length; i++) {
      if (rackets[i].dataset.brand.localeCompare(nextRacket) === 1 || rackets[i].dataset.brand.localeCompare(nextRacket) === 0) {
        // card.style.opacity = "0";
        container.insertBefore(card, rackets[i].closest(".racket-card"));
        // fadeIn(card, 1, 0.1);
        break
      } else {
        // card.style.opacity = "0";
        container.appendChild(card);
        // fadeIn(card, 1, 0.1);
      };
    };
  }
}
