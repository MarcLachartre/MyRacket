class RacketSearchDisplay extends RacketSearch {
  constructor(checkboxInputs, searchbar, rackets) {
    super(checkboxInputs, searchbar);
    this.rackets = rackets;
  }

  racketSearchDifference(racketsArray) { //returns the difference between the rackets in the json and the rackets in comparator (it takes an array as argument, compares them and push the unique itemsId in the racket difference array)
    const racketDifference = [];
    racketsArray.sort((a,b)=>{
      return a.id - b.id
    });

    for (let i = 0; i <= racketsArray.length; i++) {
      if (i != 0 && i!= racketsArray.length && Number(racketsArray[i].id) === Number(racketsArray[i - 1].id)) {
        i+=1;
      } else if (i !== 0 && i!= racketsArray.length && Number(racketsArray[i].id) !== Number(racketsArray[i - 1].id)) {
        racketDifference.push(racketsArray[i-1]);
      } else if (i === (racketsArray.length) && Number(racketsArray[(i-i)].id) !== Number(racketsArray[(i - 2)].id)) {
        racketDifference.push(racketsArray[i-1]);
      }
    }
    return racketDifference
  }

  async racketsToUpdate() { //compares the rackets present and returns the rackets to remove or to add
    const racketSearchResult = await super.racketFetch();
    const allRackets = [];
    this.rackets.forEach(racket => {
      allRackets.push(racket.dataset);
    });

    racketSearchResult.forEach(racket => {
      allRackets.push(racket);
    });

    const racketsToUpdate = this.racketSearchDifference(allRackets);
    if (racketSearchResult.length > this.rackets.length) {
      this.addRackets(racketsToUpdate);
    } else {
      this.removeRackets(racketsToUpdate);
    };
  }

  async addRackets(racketsToAdd) { //this method create the cards that are the result of the search. It creates a racket object, then we create the card with the right style. We also add the event listener to each card for it to be properly working (cookie event listener)
    const racketIdsAdded = [];
    racketsToAdd.forEach(racketObj => {
      const racket = new Racket(racketObj.id, racketObj.brand, racketObj.model, racketObj.weight, racketObj.stringpattern, racketObj.balance, racketObj.headsize)
      const card = racket.createCard(); //this creates the card and adds the listeners to the button (add comparision event listener)



      if (racket.isAlreadyInComparator(card.querySelector('.racket-checkbox'))) {
        racket.selectedCardStyle(card.querySelector('.racket-checkbox'));
      };

      if (document.querySelectorAll(".compared-racket-checkbox").length >= 10) {
        racket.disableComparision(card.querySelector('.racket-checkbox'));
      };


    });
  }

  removeRackets(racketsToRemove) {
    const racketIdsToRemove = racketsToRemove.map(racket => racket = racket.id);
    // console.log(racketIdsToRemove)
    this.rackets.forEach(async racket =>{
      if (racketIdsToRemove.includes(racket.id)) {
        racket.closest('.racket-card').remove();
      };
    });
  }
}
