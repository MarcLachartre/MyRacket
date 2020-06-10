class RacketCard{
  constructor(racketCards){
    this.racketCards = document.querySelectorAll('.racket-checkbox');
  }

  initStyleOnLoad(){
    console.log("init style on load")
    this.clickableCard();
    this.racketCards.forEach((checkbox) => {
      this.cardStyleSelector(checkbox)
    });
  }

  addStyleOnClick() {
    console.log("add style on click")
    this.racketCards.forEach(checkbox => { //add event listener on the checkbox of racket cards to add or remove their display
      checkbox.addEventListener("change", event => {
        if (event.target.parentElement.className.match("disabled") == null) { // classname matches "disabled" when comparator reached max capacity, you cannot addstyle to rackets you are not aload to add to the comparator
          this.cardStyleSelector(event.target);
        };
      });
    });
  }

  createCard() {

  }

  cardStyleSelector(checkbox) { //decides what style to apply to the racket, selected or initial (not selected).
    //console.log("card style selector")
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

