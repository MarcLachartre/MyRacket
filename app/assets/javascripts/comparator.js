class Comparator{
  constructor(racketsInComparator) {
    this.racketsInComparator = document.querySelector('.racket-comparator-container').querySelectorAll('input.compared-racket-checkbox');
  }

  init(searchEvent) {
    const comparatorDisplay = this.initComparatorDisplay();
    comparatorDisplay.init(); // initialization of comparator display ( add envent listeners to open/close it)
    const racketComparision = this.initRacketComparision();
    racketComparision.init();
    if (searchEvent === undefined) {
        this.racketsInComparator.forEach(checkbox => {
        this.addRemoveCardListener(checkbox); //add listener to cards in comparator (to remove them)
      });
    }
    this.initComparator(racketComparision)
  }

  initComparator(racketComparision) {
    const allRackets = document.querySelectorAll('.racket-checkbox');
    allRackets.forEach(racket => {
      racket.addEventListener("change", (event) => { //add event listener to each rackets so that on click it does the following (see comments)
        if (this.reachedMaxCapacity() === false && this.isAlreadyInComparator(racket) === false) {  // if comparator didnt reach max capacity and racket is not already in comparator, create a racket comparision with the racket dataset, add it to comparator
          const comparedRacket = new RacketComparision(racket.dataset.brand, racket.dataset.model, racket.dataset.headsize, racket.dataset.stringpattern, racket.dataset.weight, racket.dataset.length, racket.dataset.swingweight, racket.dataset.stiffness, racket.dataset.power, racket.dataset.manoeuvrability, racket.dataset.comfort, racket.dataset.control, racket.dataset.id)
          comparedRacket.addRacketToComparator();
            if (this.reachedMaxCapacity()) {racketComparision.disableComparision()}; //if comparator reached its maximum capacity, user shouldnt be able to add rackets anymore
        } else if (this.isAlreadyInComparator(racket) === true) { // if racket is already in comparator, lets remove it from there(remove compared racket methods checks if comparator is full, if true, removing the racket will enable the comparission of rackets)
          this.removeComparedRacket(event);
        };
      });
    });
  }

  initComparatorDisplay() {
    return new ComparatorDisplay()
  }

  initRacketComparision() {
    return new RacketComparision()
  }

  isAlreadyInComparator(racket) {
    return this.racketsCompared().includes(racket.id) ? true : false
  }

  reachedMaxCapacity() {
    const comparedRackets = document.querySelectorAll(".short-comparator-racket-card");
    // console.log(`reached max capacity ${comparedRackets.length >= 5 ? true : false}`)
    return comparedRackets.length >= 5 ? true : false
  }

  racketsCompared() {
    // console.log("rackets compared");
    const updatedRacketsInComparator = document.querySelectorAll('input.compared-racket-checkbox');
    const racketIdsInComparator = [];
    for (let racket of updatedRacketsInComparator.values()) {
      if (racketIdsInComparator.includes(racket.id) === false) {
        racketIdsInComparator.push(racket.id);
      };
    };
    return racketIdsInComparator
  }

  addRemoveCardListener(checkbox) {
  // console.log("add remove card listener"); // this function adds an event listen on the rackets already present in or added to the comparator to remove them
    checkbox.addEventListener('change', (event) => {
      this.removeComparedRacket(event);
    });
  }

  removeComparedRacket(event) {
    // console.log("remove compared racket")
    const racketsCompared = document.querySelectorAll('input.compared-racket-checkbox');

    if (this.reachedMaxCapacity() === true) {
      const racketComparision = this.initRacketComparision();
      racketComparision.enableComparision()
    };
    for (let card of racketsCompared.values()) {
      if (event.target.id == card.id) {
        card.parentElement.parentElement.remove();
      };
    };
  }
}
