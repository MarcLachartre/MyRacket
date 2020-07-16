class RacketSearchDisplay extends RacketSearch {
  constructor(checkboxInputs, searchbar, page, rackets) {
    super(checkboxInputs, searchbar, page);
    this.rackets = rackets;
  }

  async racketsUpdate() { //compares the rackets present with the racket fetched, stores the rackets to remove or to add or to leave, and then adds or remove them.
    const racketFetched = await super.racketFetch();
    const racketsToAdd = [];
    const racketsToRemove = [];
    const racketSearchIdsResult = [];
    const racketIdsDisplayed = [];

    const racketIdsFetched = racketFetched.map(racket => racket = racket.id);
    this.rackets.forEach(racket => racketIdsDisplayed.push(Number(racket.dataset.id)));

    this.rackets.forEach(racket => {
      if (racketIdsFetched.includes(Number(racket.dataset.id))) {
        racketsToRemove.push(racket);
      };
    });

    racketFetched.forEach(racket => {
      if (racketIdsDisplayed.includes(racket.id) === false) {
        racketsToAdd.push(racket);
      };
    });
    this.removeRackets(racketsToRemove);
    this.addRackets(racketsToAdd);
  }

  addRackets(racketsToAdd) { //This method creates a Racket object and therefore the cards that are the result of the search. First it creates a racket object, then we create the card with the right style. We also add the event listener to each card for it to be properly working (cookie event listener)
    const racketIdsAdded = [];
    racketsToAdd.forEach(racketObj => {
      const racket = new Racket(racketObj.id, racketObj.brand, racketObj.model, racketObj.weight, racketObj.string_pattern, racketObj.balance, racketObj.headsize, racketObj.length, racketObj.swingweight, racketObj.stiffness, racketObj.power, racketObj.manoeuvrability, racketObj.comfort, racketObj.control);
      const card = racket.createCard(); //this creates the card and adds the listeners to the button (add comparision event listener)

      if (racket.isAlreadyInComparator(card.querySelector('.racket-checkbox'))) {
        racket.selectedCardStyle(card.querySelector('.racket-checkbox'));
      };

      if (document.querySelectorAll(".compared-racket-checkbox").length >= 10) {
        racket.disableComparision(card.querySelector('.racket-checkbox'));
      };
      this.insertRackets(racketObj.brand, racketObj.model, card);
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

  insertRackets(brandStr, modelStr, card) { //inserts rackets in the container at the right alphabetical position
    const racketsInContainer = document.querySelectorAll(".racket-checkbox");
    const container = document.querySelector(".select-racket");

    if (racketsInContainer.length === 0) {
      container.appendChild(card);
    }

    const brandModelStr = brandStr.concat(modelStr)
    for (let i = 0; i < racketsInContainer.length; i++) {
      const racketStr = racketsInContainer[i].dataset.brand.concat(racketsInContainer[i].dataset.model)
      if (racketStr.localeCompare(brandModelStr) === 1 || racketStr.localeCompare(brandModelStr) === 0) {
        container.insertBefore(card, racketsInContainer[i].closest(".racket-card"));
        break
      } else {
        container.appendChild(card);
      };
    };
  }
}
