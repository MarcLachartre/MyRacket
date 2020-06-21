class RacketCardStyleSelector extends Comparator{
  constructor() {
    super()
  }

  initStyleOnLoad(){ // on page load, if checkbox is checked or not, it sets its style. It adds an event listener on the checkboxes to each racket card to modify their style on change event.
    //console.log("init style on load")
    this.clickableCard();
    document.querySelectorAll('.racket-checkbox').forEach((checkbox) => {
      this.cardStyleSelector(checkbox);
      this.addStyleOnClick(checkbox);
    });
  }

  addStyleOnClick(checkbox) { //add event listener on the checkbox of racket cards to add or remove their display
    // console.log("add style on click")
    checkbox.addEventListener("change", event => {
      if (event.target.parentElement.className.match("disabled") == null) { // classname matches "disabled" when comparator reaches max capacity, you cannot add style to rackets you are not allowed to add to the comparator
        this.cardStyleSelector(event.target);
      };
    });
  }

  cardStyleSelector(checkbox) { //decides what style to apply to the racket, selected or initial (not selected).
    // console.log("card style selector")
    if (checkbox.checked === true) {
        const comparedRackets = document.querySelectorAll('input.compared-racket-checkbox');
        this.selectedCardStyle(checkbox);
        this.addCardStyleRemovalListener(checkbox, comparedRackets);
      } else {
        this.initialCardStyle(checkbox);
    };
  }

  addCardStyleRemovalListener(racketCheckbox, racketsNodelist) { //add event listener on the checkbox of compared racket cards to remove the display of racket cards. First parameter corresponds to the racket card checkbox, second one corresponds to another nodelist containing its matching checkbox (for example, compared racket checkbox)
    //console.log("add card style removal listener")
    racketsNodelist.forEach(racketNode => {
      if (racketNode.id === racketCheckbox.id) {
        racketNode.addEventListener('change', () => {
          this.initialCardStyle(racketCheckbox);
        });
      };
    });
  }

  selectedCardStyle(checkbox){
    //console.log("selected card style")
    checkbox.checked = true;
    const card = checkbox.closest(".racket-card");
    card.classList.toggle("selected-racket");
  }

  initialCardStyle(checkbox){
    //console.log("initial card style")
    checkbox.checked = false;
    const card = checkbox.closest(".racket-card");
    card.classList.remove("selected-racket");
  }

  clickableCard() {
    document.querySelectorAll('.card-item-description').forEach((card) => {
      const clickableCard = card.querySelector(".card-top");
      clickableCard.addEventListener('click', () => {
        location.href = card.getElementsByClassName("see-more-link")[0].href; //redirects to the racket show page
      });
    });
  }
}
