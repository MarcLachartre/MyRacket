class ComparedRacket {
  constructor(brand, model, headsize, stringpattern, weight, length, swingweight, stiffness, power, manoeuvrability, comfort, control, id) {
    this.brand = brand;
    this.model = model;
    this.headsize = headsize;
    this.stringpattern = stringpattern;
    this.weight = weight;
    this.length = length;
    this.swingweight = swingweight;
    this.stiffness = stiffness;
    this.power = power;
    this.manoeuvrability = manoeuvrability;
    this.comfort = comfort;
    this.control = control;
    this.id = id;
  }

  initComparision() {
    if (this.isAlreadyInComparator()) {
      this.removeRacketFromComparator();
    } else {
      this.addRacketToComparator();
    };
  }

  isAlreadyInComparator() {
    const racketsInComparator = document.querySelector('.racket-comparator-container').querySelectorAll('input.compared-racket-checkbox');
    const racketsInComparatorIds = [];

    for (let racket of racketsInComparator.values()) {
      racketsInComparatorIds.push(racket.id);
    };

    if (racketsInComparatorIds.includes(this.id)){
      return true
    } else {
      return false
    };
  }

  createRemoveLabel() { //each racket in comparator should have one remove label made of one checkbox so that we can remove it from comparator when unchecking it, its label and a delete cross item.
    const checkbox = document.createElement("input");
    const deleteLabel = document.createElement("label");
    const deleteCross = document.createElement('i');

    deleteLabel.classList.toggle("compared-racket-checkbox-label");
    deleteCross.classList.toggle("fas");
    deleteCross.classList.toggle("fa-times");
    checkbox.classList.toggle("compared-racket-checkbox");
    checkbox.type = "checkbox";
    checkbox.name = "selected_racket_id[]";
    checkbox.id = this.id;
    checkbox.value = this.id;
    checkbox.checked = "checked";
    checkbox.style.display = "none";
    checkbox.addEventListener("change", (event)=> { // we add an event listener to the new created card so that on click it removes it from the comparator and the cookies.
      const selectedRacket = "selected_racket" + "="
      const selectedRacketCookie = new ComparedRacketCookie(selectedRacket) //selected_racket.js
      selectedRacketCookie.update(event.target.id, event.target.checked);

      this.removeRacketFromComparator();
    });

    deleteLabel.appendChild(checkbox);
    deleteLabel.appendChild(deleteCross);

    return deleteLabel
  };

  createShortCard() {
    const removeLabel = this.createRemoveLabel();
    const card = document.createElement("div");
    const brandModelContainer = document.createElement("div");

    card.classList.toggle('short-comparator-racket-card');
    brandModelContainer.classList.toggle('short-brand-model-container');

    card.appendChild(brandModelContainer);

    for (let i = 0; i < 2; i++) {
      let specData = document.createElement("div");
      specData.classList.toggle("spec-data");
      specData.id = i;
      brandModelContainer.appendChild(specData);
    };

    const allSpecData = brandModelContainer.querySelectorAll(".spec-data");
    allSpecData[0].innerHTML = this.brand;
    allSpecData[1].innerHTML = this.model;
    card.appendChild(removeLabel);

    return card
  }

  createLargeCard() {
    const card = document.createElement("div");
    const brandModelContainer = document.createElement("div");
    const removeLabel = this.createRemoveLabel();
    const largeComparatorRacketCard = document.createElement("div");
    const comparedRacketCardsData = document.createElement("div");

    card.classList.toggle('compared-racket-cards-container');
    largeComparatorRacketCard.classList.toggle('large-comparator-racket-card');
    brandModelContainer.classList.toggle('model-brand-container');
    comparedRacketCardsData.classList.toggle('compared-racket-cards-data');

    for (let i = 0; i < Object.keys(this).length-1; i++) {
      if ( i < 2) {
      let specTitle = document.createElement("h4");
      specTitle.innerHTML = this[Object.keys(this)[i]];
      brandModelContainer.appendChild(specTitle);
      } else if ( 2 <= i < 13) {
      let spec = document.createElement("div");
      spec.innerHTML = this[Object.keys(this)[i]];
      spec.classList.toggle("spec");
      comparedRacketCardsData.appendChild(spec);
      };
    };

    largeComparatorRacketCard.appendChild(brandModelContainer);
    largeComparatorRacketCard.appendChild(comparedRacketCardsData);
    card.appendChild(largeComparatorRacketCard);
    card.appendChild(removeLabel);

    return card
  }

  addRacketToComparator() {
    const shortComparator = document.querySelector('.short-displayed-rackets');
    const largeComparator = document.querySelector('.racket-comparator');
    shortComparator.appendChild(this.createShortCard());
    largeComparator.appendChild(this.createLargeCard());
  }

  removeRacketFromComparator() {
    const allRacketsInComparator = document.querySelectorAll("input.compared-racket-checkbox"); //First we add an event listener to the racket checboxes that are already in the comparator to remove them when clicked
    allRacketsInComparator.forEach((checkbox) => {
      if (checkbox.id == this.id) {
        checkbox.parentElement.parentElement.remove();
      };
    });
  }
}
