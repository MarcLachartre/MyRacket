class Comparator { //this class in only responsible of initializing the style of the comparator element and to add listeners to its inner element such as "remove racket from comparator on click"
  constructor(shortComparator, largeComparator, comparatorContainer){
    this.shortComparator = document.querySelector('.short-comparator-container');
    this.largeComparator = document.querySelector('.large-comparator-container');
    this.comparatorContainer = document.querySelector('.racket-comparator-container');
  };

  initDisplay() { //this function loads comparator on page load and adds a click event to the arrow in order to display the large comparator or the short one
    this.largeComparator.style.display = "none";
    const comparator = this.comparatorContainer;
    const downArrow = document.querySelector(".open-comparator-arrow");
    const upArrow = document.querySelector(".close-comparator-arrow");

    upArrow.addEventListener('click', () => {
      this.closeLargeComparator();
      scrollUp(comparator, 1, 8, 85, "vh") //effects.js
    })

    downArrow.addEventListener('click', () => {
      this.openLargeComparator();
      scrollDown(comparator, 1, 8, 85, "vh"); //effects.js
    });
    this.addRemoveCardListener()
    }

  addRemoveCardListener() { // this function adds an event listen on the rackets already present in the comparator to remove them from there
    const comparedCards = document.querySelectorAll('.compared-racket-checkbox');
    comparedCards.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        for (let card of comparedCards.values()) {
          if (event.target.id == card.id ) {
            card.parentElement.parentElement.remove();
          };
        };
      });
    });
  }

  openLargeComparator() {
    this.shortComparator.style.display = "none";
    this.largeComparator.style.display = "flex";
  }

  closeLargeComparator() {
    this.shortComparator.style.display = "flex";
    this.largeComparator.style.display = "none";
  }
}
