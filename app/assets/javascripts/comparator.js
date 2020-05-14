const comparator = () => { //This functions role is to display rackets in the comparator on page load and add and event listener to remove the remove racket card from the comparator.

  let allRacketsInComparator = document.querySelectorAll(".compared-racket-checkbox"); //First we add an event listener to the racket checboxes that are already in the comparator to remove them when clicked
  allRacketsInComparator.forEach((racket) => {
    racket.addEventListener("change", (event) => {
      allRacketsInComparator.forEach(checkbox => {
        console.log(checkbox.id)
        if (checkbox.id == event.target.id) {
          checkbox.parentElement.remove()
        };
      });
      removeRacketIdFromCookies(event);

    });
  });

  let allRackets = document.querySelectorAll('.racket-checkbox'); //We select all rackets checkboxes in the racket container
  // - Then we reiterate on allRackets, add an event listener to each and on change event it has to check if the clicked racket is already in the comparator or not:
  allRackets.forEach((racket) => {
    racket.addEventListener('change', (event) => {
      let comparedRacketIds = document.querySelectorAll(".compared-racket-checkbox"); //Here we retrieve the rackets that are already in the comparator and put their ids in an array
      comparedRackets = [];
      comparedRacketIds.forEach((comparedracket) => {
        comparedRackets.push(parseInt(comparedracket.id));
      });

      if (comparedRackets.includes(parseInt(racket.dataset.id)) === false) { // If it is not allready in the comparator, the change event on the racket checkbox has to add it to the comparator.
        console.log('- addRacketToComparator');
        addRacketCardToComparator(racket);// As the racket checkbox has been clicked, now we want to display the racket in the racket comparator div, with the correct display.
      } else { // If it is already in the comparator the change event on the racket checkbox has to remove it from the comparator.
        console.log('- removeRacketFromComparator');
        removeRacketCardFromComparator(racket, comparedRacketIds, comparedRackets);
      };
    });
  });
};

const removeRacketCardFromComparator = (racket, comparedRacketIds, comparedRackets) => {
  let racketIndex = comparedRackets.indexOf(parseInt(racket.dataset.id));
  if (racketIndex > -1) {
    comparedRackets.splice(racketIndex, 1);
    comparedRacketIds.forEach((racketToRemove) => {
      if (racket.dataset.id == racketToRemove.id) {
        racketToRemove.parentElement.remove(); //racket removal thanks to the id
      };
    });
  };
};

const addRacketCardToComparator = (racket) => {
  const comparatorContainer = document.querySelector('.racket-comparator-container');

  // We retrieve the data from the clicked racket, and store it in a racket object with its matching variable
  let racketObj = {
    brand: racket.dataset.brand,
    model: racket.dataset.model,
    headsize: racket.dataset.headsize,
    stringpattern: racket.dataset.stringpattern,
    weight: racket.dataset.weight,
    length: racket.dataset.length,
    swingweight: racket.dataset.swingweight,
    stiffness: racket.dataset.stiffness,
    power: racket.dataset.power,
    manoeuvrability: racket.dataset.manoeuvrability,
    comfort: racket.dataset.comfort,
    control: racket.dataset.control,
    id: racket.dataset.id
  };

  //we create the hidden input (so that when un selected the racket cookie gets updated) and checkbox (so that when unchecked its removed from the comparator and removes some style from the racket card)
  const shortComparedRacketCheckbox = document.createElement("input");
  const hiddenId = document.createElement("input");

  hiddenId.type = "hidden";
  for (let [key, value] of Object.entries(racketObj)) {
    hiddenId.setAttribute(`data-${key}`, value);
  };
  hiddenId.classList.toggle("compared-racket");

  shortComparedRacketCheckbox.classList.toggle("compared-racket-checkbox");
  shortComparedRacketCheckbox.type = 'checkbox';
  shortComparedRacketCheckbox.name = "selected_racket_id[]";
  shortComparedRacketCheckbox.id = racketObj.id;
  shortComparedRacketCheckbox.value = racketObj.id;
  shortComparedRacketCheckbox.checked = "checked";

  const largeComparedRacketCheckbox = shortComparedRacketCheckbox.cloneNode(true);
  const racketCheckboxArray = [largeComparedRacketCheckbox, shortComparedRacketCheckbox]

  racketCheckboxArray.forEach((comparedRacketCheckbox) => {
    comparedRacketCheckbox.addEventListener("change", (event)=> { // we add an event listener to the new created card so that on click it removes it from the comparator and it changes the racket card style to unselected
      racketCheckboxArray.forEach(checkbox => {
        if (checkbox.id == event.target.id) {
          checkbox.parentElement.remove()
        };
      });

      let racketCardCheckbox = document.querySelectorAll('.racket-checkbox');
      racketCardCheckbox.forEach(checkbox => {
        if (event.target.id == checkbox.id ) {
          removeRacketCardStyle(checkbox);
        };
      });
    removeRacketIdFromCookies(event);
    displaySpecList();
    });
  });
  comparatorDisplay(racketObj, shortComparedRacketCheckbox, largeComparedRacketCheckbox, hiddenId);
};

const onTurbolinksLoadComparator = () => { //this function loads comparator on page load and adds a click event to the arrow in order to display the large comparator
  const largeComparator = document.querySelector('.large-comparator-container');
  largeComparator.style.display = "none"
  const shortComparator = document.querySelector('.short-comparator-container');
  const openComparatorArrow = document.querySelector(".open-comparator-arrow");
  openComparatorArrow.addEventListener('click', () => {


    const comparatorContainer = document.querySelector('.racket-comparator-container');

    if (comparatorContainer.style.height != "85vh") {
    openLargeComparator(shortComparator, largeComparator);
    scrollDown(comparatorContainer, 1, 9, 85, "vh"); //effects.js
    openComparatorArrow.children[0].style.transform = "rotate(225deg)";
    openComparatorArrow.children[0].style.transform = "-webkit-transform: rotate(-225deg)";
    } else {
    closeLargeComparator(shortComparator, largeComparator);
    scrollUp(comparatorContainer, 1, 9, 85, "vh")
    openComparatorArrow.children[0].style.transform = "rotate(45deg)";
    openComparatorArrow.children[0].style.transform = "-webkit-transform: rotate(-45deg)";
    };
  });
};

const openLargeComparator = (shortComparator, largeComparator) => {
  shortComparator.style.display = "none";
  largeComparator.style.display = "flex";
}

const closeLargeComparator = (shortComparator, largeComparator) => {
  shortComparator.style.display = "flex";
  //fadeOut(largeComparator)
  largeComparator.style.display = "none";
  //setTimeout(function(){ largeComparator.style.display = "none"; }, 600)
}

const comparatorDisplay = (racketObj, shortcheckbox, largecheckbox, hiddenId) => {
  shortComparator(racketObj, shortcheckbox, hiddenId);
  largeComparatorDisplay(racketObj, largecheckbox, hiddenId)
};

const shortComparator = (racketObj, checkbox1, hiddenId) => {
  const shortDisplayedRackets = document.querySelector('.short-displayed-rackets');
  const shortRacketCard = document.createElement("div");
  const shortBrandModelContainer = document.createElement("div");

  shortRacketCard.classList.toggle('short-comparator-racket-card');
  shortBrandModelContainer.classList.toggle('short-brand-model-container');

  for (let i = 0; i < 2; i++) {
    let specData = document.createElement("div");
    specData.classList.toggle("spec-data");
    specData.id = i;
    shortBrandModelContainer.appendChild(specData);
    shortRacketCard.appendChild(checkbox1);
    shortRacketCard.appendChild(hiddenId);
  };

  allSpecData = shortBrandModelContainer.querySelectorAll(".spec-data");
  allSpecData[0].innerHTML = racketObj.brand;
  allSpecData[1].innerHTML = racketObj.model;
  shortRacketCard.style.opacity = "0";
  shortDisplayedRackets.appendChild(shortRacketCard);
  shortRacketCard.appendChild(shortBrandModelContainer)
  fadeIn(shortRacketCard)
};

const largeComparatorDisplay = (racketObj, checkbox2, hiddenId) => {
  const racketComparator = document.querySelector('.racket-comparator')
  //const comparedRackets = document.querySelectorAll('.compared-racket')
  const comparedRacketCardsContainer = document.createElement("div");
  const largeRacketCard = document.createElement("div");
  const modelBrandContainer = document.createElement("div");
  const comparedRacketCardsData = document.createElement("div");

  comparedRacketCardsContainer.classList.toggle('compared-racket-cards-container');
  largeRacketCard.classList.toggle('large-comparator-racket-card');
  modelBrandContainer.classList.toggle('model-brand-container');
  comparedRacketCardsData.classList.toggle('compared-racket-cards-data');

  racketComparator.appendChild(comparedRacketCardsContainer)
  comparedRacketCardsContainer.appendChild(largeRacketCard)
  largeRacketCard.appendChild(modelBrandContainer)
  largeRacketCard.appendChild(comparedRacketCardsData)

  for (let i = 0; i < Object.keys(racketObj).length-1; i++) {
    let spec = document.createElement("div");
    spec.id = i
    if ( spec.id < 2) {
    let specTitle = document.createElement("h4");
    specTitle.innerHTML = racketObj[Object.keys(racketObj)[i]]
    modelBrandContainer.appendChild(specTitle)
    } else if ( 2 <= spec.id < 13) {
    spec.innerHTML = racketObj[Object.keys(racketObj)[i]]
    spec.classList.toggle("spec");
    comparedRacketCardsData.appendChild(spec)
    };
    comparedRacketCardsContainer.appendChild(checkbox2);
    comparedRacketCardsContainer.appendChild(hiddenId);
  };

};

const displaySpecList = () => { //this function's role is to display the racket speclist in the comparator
// console.log('- displaySpecList')
let comparedRacketContainer = document.querySelectorAll(".racket-comparator");
if (comparedRacketContainer[0].children.length === 0) {
  // console.log('-- false');
  document.querySelectorAll('.spec').forEach((currentValue) => {
    currentValue.style.display = "none";
  });
} else {
  // console.log('-- true');
  document.querySelectorAll('.spec').forEach((currentValue) => {
    currentValue.style.display = "flex";
  });
};
};

  //   let racketOb = {
  //   brand: comparedRackets.dataset.brand,
  //   model: racket.dataset.model,
  //   weight: racket.dataset.weight,
  //   headsize: racket.dataset.headsize,
  //   length: racket.dataset.length,
  //   swingweight: racket.dataset.swingweight,
  //   stiffness: racket.dataset.stiffness,
  //   power: racket.dataset.power,
  //   manoeuvrability: racket.dataset.manoeuvrability,
  //   comfort: racket.dataset.comfort,
  //   control: racket.dataset.control,
  //   id: racket.dataset.id
  // };
//    largeComparator.style.display = "flex";

//       comparatorContainer.style.backgroundColor = "white";
//       comparatorContainer.style.boxShadow = "0px 20px 20px -20px #c2bec2";
//       openComparatorArrow.style.transform = "rotate(-180deg)";
//       openComparatorArrow.style.transform = "-webkit-transform: rotate(-180deg)";




// const displayComparator = () => {
//   const comparatorContainer = document.querySelector('.racket-comparator-container');
//   const openComparatorArrow = document.querySelector(".open-comparator-arrow");
//   const shortComparator = document.querySelector('.short-comparator-container');
//   const largeComparator = document.querySelector('.large-comparator-container');

//   shortComparator.style.display = "flex";
//   largeComparator.style.display = "none";

//   openComparatorArrow.addEventListener("click", () => {
//     if (comparatorContainer.style.height != "83vh") {
//       scrollDown(comparatorContainer, 1, 5, 83, "vh");
//       //fullComparatorDisplay();
//       largeComparator.style.display = "flex";
//       shortComparator.style.display = "none";
//       comparatorContainer.style.backgroundColor = "white";
//       comparatorContainer.style.boxShadow = "0px 20px 20px -20px #c2bec2";
//       openComparatorArrow.style.transform = "rotate(-180deg)";
//       openComparatorArrow.style.transform = "-webkit-transform: rotate(-180deg)";
//        largeComparatorDisplay()
//     } else {
//       scrollUp(comparatorContainer, 1, 5, 83, "vh");
//       //smallComparatorDisplay()
//       shortComparator.style.display = "flex";
//       largeComparator.style.display = "none";
//       comparatorContainer.style.backgroundColor = "none";
//       comparatorContainer.style.boxShadow = "none";
//       openComparatorArrow.style.transform = "rotate(0deg)";
//       openComparatorArrow.style.transform = "-webkit-transform: rotate(-0deg)";
//     };
//   });
// };





//   for (let i = 0; i < Object.keys(racketObj).length; i++) {
//     let specData = document.createElement("div");
//     specData.classList.toggle("spec-data");
//     specData.id = i;
//     shortRacketCard.appendChild(specData);
//     shortRacketCard.appendChild(checkbox);
//     shortRacketCard.appendChild(hiddenId);
//   };

//   allSpecData = shortRacketCard.querySelectorAll(".spec-data");
//   allSpecData[0].innerHTML = racketObj.brand;
//   allSpecData[1].innerHTML = racketObj.model;

//   //We first select racket-comparator div
//   // let racketComparator = document.querySelector(".racket-comparator");

//   // //Then we create the compared-racket-cards div and append it to racket-comparator
//   // let comparedRacketCards = document.createElement("div");
//   // comparedRacketCards.setAttribute('class', 'compared-racket-cards');
//   // racketComparator.appendChild(comparedRacketCards);

//   // //Then we create the compared-racket-cards-data div that we want to append to compared-racket-cards
//   // let comparedRacketCardsData = document.createElement("div");
//   // // We create the racketId hidden input with the attribute data-id so that, on next iteration the function knows that this racket is already selected.


//   // comparedRacketCards.append(racketId);

//   // comparedRacketCardsData.setAttribute('class', 'compared-racket-cards-data');
//   // comparedRacketCards.appendChild(comparedRacketCardsData);
//   // comparedRacketCards.appendChild(comparedRacketCheckbox);


//   // //Then we append each values div to the compared rackets data
//   // comparedRacketCardsData.appendChild(specBrand);
//   // comparedRacketCardsData.appendChild(specModel);
//   // comparedRacketCardsData.appendChild(specWeight);
//   // comparedRacketCardsData.appendChild(specHeadsize);
//   // comparedRacketCardsData.appendChild(specLenth);
//   // comparedRacketCardsData.appendChild(specSwingweight);
//   // comparedRacketCardsData.appendChild(specStiffness);
//   // comparedRacketCardsData.appendChild(specPower);
//   // comparedRacketCardsData.appendChild(specManoeuvrability);
//   // comparedRacketCardsData.appendChild(specComfort);
//   // comparedRacketCardsData.appendChild(specControl);

//   //   //Finally we apply some style to the new divs we created
//   // //comparedRacketCards style
//   // comparedRacketCards.style.display = 'flex';
//   // comparedRacketCards.style.flexDirection = 'column';
//   // comparedRacketCards.style.alignItems = 'center';
//   // comparedRacketCards.style.justifyContent = 'space-evenly';
//   // comparedRacketCards.style.width = '15%';
//   // comparedRacketCards.style.height = '100%';

//   // //comparedRacketCardsData style
//   // comparedRacketCardsData.style.height = '450px';
//   // comparedRacketCardsData.style.display = "flex";
//   // comparedRacketCardsData.style.alignItems = "center";
//   // comparedRacketCardsData.style.flexDirection = "flexDirection";
//   // comparedRacketCardsData.style.justifyContent = "space-evenly";
// }

// const removeRacketFromComparator = (racketEvent) => {
//   console.log('- removeRacketFromComparator')
//   racketToRemove = racketEvent.target;
//   racketToRemove.parentElement.style.animation = "fadeout 2s";
//   racketToRemove.parentElement.remove();

//   let racketCardToRemove = document.getElementById(`${racketToRemove.id}`);

//   if (racketCardToRemove !== null) {
//     racketCardToRemove.checked = false;
//     // selectCardStyle(racketCardToRemove);

//   };
// };




