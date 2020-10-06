class ComparatorDisplay extends Comparator{ //this class in only responsible of initializing the style of the comparator element.
  constructor(shortComparator, largeComparator, comparatorContainer){
    super();
    this.shortComparator = document.querySelector('.short-comparator-container');
    this.largeComparator = document.querySelector('.large-comparator-container');
    this.comparatorContainer = document.querySelector('.racket-comparator-container');
  };

  init() { //this function loads comparator on page load and adds a click event to the arrow in order to display the large comparator or the short one
    this.largeComparator.style.display = "none";
    const comparator = this.comparatorContainer;
    const downArrow = document.querySelector(".open-comparator-arrow");
    const upArrow = document.querySelector(".close-comparator-arrow");

    upArrow.addEventListener('click', () => {
      this.closeLargeComparator();
      // scrollUp(comparator, 1, 8, 85, "vh") //effects.js
    })

    downArrow.addEventListener('click', () => {
      this.openLargeComparator();
      // scrollDown(comparator, 1, 8, 85, "vh"); //effects.js
    });
  }

  openLargeComparator() {
    this.shortComparator.style.display = "none";
    this.largeComparator.style.display = "flex";
    this.largeComparator.style.height = "85vh";
  }

  closeLargeComparator() {
    this.largeComparator.style.display = "none";
    this.shortComparator.style.display = "flex";
    this.shortComparator.style.height = "8vh";
  }
}
