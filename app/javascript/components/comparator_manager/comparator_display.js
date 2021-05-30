import {Comparator} from './comparator_file_manager';
// console.log('Comparator Display')
export class ComparatorDisplay extends Comparator { //this class in only responsible of initializing the style of the comparator element.
  constructor(){
    super()
    this.shortComparator = document.querySelector('.short-comparator-container');
    this.largeComparator = document.querySelector('.large-comparator-container');
    this.comparatorContainer = document.querySelector('.racket-comparator-container');
  };

  init() { //this function loads comparator on page load and adds a click event to the arrow in order to display the large comparator or the short one
    this.largeComparator.style.display = "none";
    const comparator = this.comparatorContainer;
    const downArrow = document.querySelector(".open-comparator-arrow");
    const upArrow = document.querySelector(".close-comparator-arrow");
    this.setEmptyComparatorMessage()
    upArrow.addEventListener('click', () => {
      console.log("cul")
      this.closeLargeComparator();
      this.setInitialCardState(document.querySelectorAll(".short-comparator-racket-card"));
      // scrollUp(comparator, 1, 8, 85, "vh") //effects.js
    })

    downArrow.addEventListener('click', () => {
      this.openLargeComparator();
      this.setInitialCardState(document.querySelectorAll(".compared-racket-cards-container"));
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
    this.shortComparator.style.height = "70px";
  }

  setInitialCardState(node) {
    for (let i = 0; i < node.length; i++) {
      node[i].style.webkitAnimation = "none";
      node[i].style.webkitAnimationDelay = "none";
      node[i].style.webkitAnimationFillMode = "none";
      node[i].style.opacity = "1";
    }
  }

  setEmptyComparatorMessage() {
    if (Array.from(document.querySelector(".short-displayed-rackets").querySelectorAll(".short-comparator-racket-card")).length === 0) {
      document.querySelector(".empty-comparator").style.display = "flex"; //adds empty comparator message, if there are no compared rackets
      document.querySelector(".short-displayed-rackets").style.display = "none"
    } else {
      document.querySelector(".empty-comparator").style.display = "none"; //removes empty comparator message, if there are no compared rackets
      document.querySelector(".short-displayed-rackets").style.display = "grid"
    }
  }
}
