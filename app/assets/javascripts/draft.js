document.addEventListener('turbolinks:load', () => {
  const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
  const searchField = document.querySelector(".type-search");
  searchField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const search = new RacketSearch(searchbarCheckboxes, searchField);
      const searchResult = search.racketFetch();
      event.preventDefault();
    };
  });

  searchbarCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const racketsInContainer = document.querySelectorAll('.racket-checkbox');
      const search = new RacketSearchDisplay(searchbarCheckboxes, searchField, racketsInContainer);
      const displaySearchResult = search.racketsToUpdate();
    });
  });
});



//when i get the json object
// - check what racket is in the the container
// - if the json object matches the rackets in racket container, let it be
// - if the json object contains less rackets than those in the container, remove the rackets from the container
// - if the json object contains more rackets, add the rackets to the container


// console.log(queryObject.brand)

// const parameterizeArray = (key, arr) => {
//   arr = arr.map(encodeURIComponent)
//   key = encodeURIComponent(key)
//   return key + arr.join('&')
// }
// parameterizeArray("brand[]=", brands)
// console.log(parameterizeArray("brand[]", brands))
      // queryObjects.forEach(brand => {
      //   a = encodeURIComponent(brand)

      // })
      // console.log(cul)
      // console.log(document.querySelector('.search-form').submit())
    //   checkedInputs = []
    // if (input.checked === true) {
    //   console.log(input.value)
    // }

      // Rails.ajax({
      //   url: "/rackets",
      //   type: "get",
      //   data: searchQuery, //"http://localhost:3000/rackets?utf8=%E2%9C%93&form_input=1&model=&brand%5B%5D=Wilson&brand%5B%5D=Babolat",
      //   dataType: "json",
      //   success: function (datas) {
      //     console.log(datas)
      //     const searchedRackets = []
      //     datas.forEach((data) => {
      //       searchedRackets.push(data)
      //     })
      //        Rails.fire(document.querySelector(".search-form"), 'ajax:success', searchedRackets)
      //       // return "ajax:success"
      //   },
      //   error: function(data) {}
      // })


// const racketFetch = () => {
//   document.querySelector('.search-form').addEventListener("click", function () {
//     Rails.ajax({
//       type: "GET",
//       dataType: "json",
//       url: "/rackets",
//       success: function(data){
//         console.log(data);
//       }
//     });
//   });
// }

// document.addEventListener('ajax:success', (event, data, status, xhr) => {
//   console.log(event)
//   var response = data.brand
//   console.log(response)
// })
// ##########################comparator.js#######################################

// const comparator = () => { //This functions role is to display rackets in the comparator on page load and add and event listener to remove the remove racket card from the comparator.

//   let allRacketsInComparator = document.querySelectorAll(".compared-racket-checkbox"); //First we add an event listener to the racket checboxes that are already in the comparator to remove them when clicked
//   allRacketsInComparator.forEach((racket) => {
//     racket.addEventListener("change", (event) => {
//       allRacketsInComparator.forEach(checkbox => {
//         if (checkbox.id == event.target.id) {
//           checkbox.parentElement.parentElement.remove()
//         };
//       });
//     });
//   });

//   let allRackets = document.querySelectorAll('.racket-checkbox'); //We select all rackets checkboxes in the racket container
//   // - Then we reiterate on allRackets, add an event listener to each and on change event it has to check if the clicked racket is already in the comparator or not:
//   allRackets.forEach((racket) => {
//     racket.addEventListener('change', (event) => {
//       let comparedRacketIds = document.querySelectorAll(".compared-racket-checkbox"); //Here we retrieve the rackets that are already in the comparator and put their ids in an array
//       comparedRackets = [];
//       comparedRacketIds.forEach((comparedracket) => {
//         comparedRackets.push(parseInt(comparedracket.id));
//       });

//       if (comparedRackets.includes(parseInt(racket.dataset.id)) === false) { // If it is not allready in the comparator, the change event on the racket checkbox has to add it to the comparator.
//         //console.log('- addRacketToComparator');
//         addRacketCardToComparator(racket);// As the racket checkbox has been clicked, now we want to display the racket in the racket comparator div, with the correct display.
//       } else { // If it is already in the comparator the change event on the racket checkbox has to remove it from the comparator.
//         //console.log('- removeRacketFromComparator');
//         removeRacketCardFromComparator(racket, comparedRacketIds, comparedRackets);
//       };
//     });
//   });
// };

// const removeRacketCardFromComparator = (racket, comparedRacketIds, comparedRackets) => {
//   let racketIndex = comparedRackets.indexOf(parseInt(racket.dataset.id));
//   if (racketIndex > -1) {
//     comparedRackets.splice(racketIndex, 1);
//     comparedRacketIds.forEach((racketToRemove) => {
//       if (racket.dataset.id == racketToRemove.id) {
//         racketToRemove.parentElement.parentElement.remove(); //racket removal thanks to the id
//       };
//     });
//   };
// };

// const addRacketCardToComparator = (racket) => {
//   const comparatorContainer = document.querySelector('.racket-comparator-container');
//   // We retrieve the data from the clicked racket, and store it in a racket object with its matching variable
//   let racketObj = {
//     brand: racket.dataset.brand,
//     model: racket.dataset.model,
//     headsize: racket.dataset.headsize,
//     stringpattern: racket.dataset.stringpattern,
//     weight: racket.dataset.weight,
//     length: racket.dataset.length,
//     swingweight: racket.dataset.swingweight,
//     stiffness: racket.dataset.stiffness,
//     power: racket.dataset.power,
//     manoeuvrability: racket.dataset.manoeuvrability,
//     comfort: racket.dataset.comfort,
//     control: racket.dataset.control,
//     id: racket.dataset.id
//   };

//   const shortComparedRacketCheckbox = document.createElement("input");
//   //const hiddenId = document.createElement("input");
//   const deleteLabel = document.createElement("label");
//   const deleteCross = document.createElement('i')

//   deleteLabel.classList.toggle("compared-racket-checkbox-label");
//   deleteCross.classList.toggle("fas");
//   deleteCross.classList.toggle("fa-times");

//   // hiddenId.type = "hidden";
//   // for (let [key, value] of Object.entries(racketObj)) {
//   //   hiddenId.setAttribute(`data-${key}`, value);
//   // };
//   // hiddenId.classList.toggle("compared-racket");

//   shortComparedRacketCheckbox.classList.toggle("compared-racket-checkbox");
//   shortComparedRacketCheckbox.type = 'checkbox';
//   shortComparedRacketCheckbox.name = "selected_racket_id[]";
//   shortComparedRacketCheckbox.id = racketObj.id;
//   shortComparedRacketCheckbox.value = racketObj.id;
//   shortComparedRacketCheckbox.checked = "checked";
//   shortComparedRacketCheckbox.style.display = "none";

//   const largeComparedRacketCheckbox = shortComparedRacketCheckbox.cloneNode(true);
//   const racketCheckboxArray = [largeComparedRacketCheckbox, shortComparedRacketCheckbox]

//   racketCheckboxArray.forEach((comparedRacketCheckbox) => {
//     //console.log(comparedRacketCheckbox)
//     comparedRacketCheckbox.addEventListener("change", (event)=> { // we add an event listener to the new created card so that on click it removes it from the comparator and it changes the racket card style to unselected
//       racketCheckboxArray.forEach(checkbox => {
//         if (checkbox.id == event.target.id) {

//           checkbox.parentElement.parentElement.remove();
//         };
//       });

//       let racketCardCheckbox = document.querySelectorAll('.racket-checkbox');
//       racketCardCheckbox.forEach(checkbox => {
//         if (event.target.id == checkbox.id ) {
//           removeRacketCardStyle(checkbox);
//         };
//       });
//     updateSelectedRacketCookie(event.target.id, event.target.checked)
//     displaySpecList();
//     });
//   });
//   comparatorDisplay(racketObj, shortComparedRacketCheckbox, largeComparedRacketCheckbox, deleteLabel, deleteCross);
// };

// // const onTurbolinksLoadComparator = () => { //this function loads comparator on page load and adds a click event to the arrow in order to display the large comparator

// //   const comparatorContainer = document.querySelector('.racket-comparator-container');
// //   const largeComparator = document.querySelector('.large-comparator-container');
// //   largeComparator.style.display = "none";
// //   const shortComparator = document.querySelector('.short-comparator-container');
// //   const downArrow = document.querySelector(".open-comparator-arrow");
// //   const upArrow = document.querySelector(".close-comparator-arrow");

// //     upArrow.addEventListener('click', () => {
// //     closeLargeComparator(shortComparator, largeComparator);
// //     scrollUp(comparatorContainer, 1, 8, 85, "vh")
// //     // arrow.children[0].style.transform = "rotate(45deg)";
// //     // arrow.children[0].style.transform = "-webkit-transform: rotate(-45deg)";
// //   })
// //     downArrow.addEventListener('click', () => {
// //     openLargeComparator(shortComparator, largeComparator);
// //     scrollDown(comparatorContainer, 1, 8, 85, "vh"); //effects.js
// //     // arrow.children[0].style.transform = "rotate(225deg)";
// //     // arrow.children[0].style.transform = "-webkit-transform: rotate(-225deg)";

// //   });
// // };

// // const openLargeComparator = (shortComparator, largeComparator) => {
// //   shortComparator.style.display = "none";
// //   largeComparator.style.display = "flex";
// // }

// // const closeLargeComparator = (shortComparator, largeComparator) => {
// //   shortComparator.style.display = "flex";
// //   largeComparator.style.display = "none";
// //   //setTimeout(function(){ largeComparator.style.display = "none"; }, 600)
// // }

// const comparatorDisplay = (racketObj, shortcheckbox, largecheckbox, label, remove) => {
//   shortComparator(racketObj, shortcheckbox, label, remove);
//   largeComparatorDisplay(racketObj, largecheckbox)
// };

// const shortComparator = (racketObj, checkbox1, label, remove) => {
//   const shortDisplayedRackets = document.querySelector('.short-displayed-rackets');
//   const shortRacketCard = document.createElement("div");
//   const shortBrandModelContainer = document.createElement("div");

//   shortRacketCard.classList.toggle('short-comparator-racket-card');
//   shortBrandModelContainer.classList.toggle('short-brand-model-container');

//   for (let i = 0; i < 2; i++) {
//     let specData = document.createElement("div");
//     specData.classList.toggle("spec-data");
//     specData.id = i;
//     shortBrandModelContainer.appendChild(specData);
//     //shortRacketCard.appendChild(hiddenId);
//   };

//   allSpecData = shortBrandModelContainer.querySelectorAll(".spec-data");
//   allSpecData[0].innerHTML = racketObj.brand;
//   allSpecData[1].innerHTML = racketObj.model;

//   shortRacketCard.style.opacity = "0";

//   shortRacketCard.appendChild(shortBrandModelContainer);
//   label.appendChild(remove);
//   label.appendChild(checkbox1)
//   shortRacketCard.appendChild(label);
//   shortDisplayedRackets.appendChild(shortRacketCard);

//   fadeIn(shortRacketCard);
// };

// const largeComparatorDisplay = (racketObj, checkbox2) => {
//   const racketComparator = document.querySelector('.racket-comparator')
//   //const comparedRackets = document.querySelectorAll('.compared-racket')
//   const comparedRacketCardsContainer = document.createElement("div");
//   const largeRacketCard = document.createElement("div");
//   const modelBrandContainer = document.createElement("div");
//   const comparedRacketCardsData = document.createElement("div");

//   comparedRacketCardsContainer.classList.toggle('compared-racket-cards-container');
//   largeRacketCard.classList.toggle('large-comparator-racket-card');
//   modelBrandContainer.classList.toggle('model-brand-container');
//   comparedRacketCardsData.classList.toggle('compared-racket-cards-data');

//   racketComparator.appendChild(comparedRacketCardsContainer)
//   comparedRacketCardsContainer.appendChild(largeRacketCard)
//   largeRacketCard.appendChild(modelBrandContainer)
//   largeRacketCard.appendChild(comparedRacketCardsData)

//   for (let i = 0; i < Object.keys(racketObj).length-1; i++) {
//     let spec = document.createElement("div");
//     spec.id = i
//     if ( spec.id < 2) {
//     let specTitle = document.createElement("h4");
//     specTitle.innerHTML = racketObj[Object.keys(racketObj)[i]]
//     modelBrandContainer.appendChild(specTitle)
//     } else if ( 2 <= spec.id < 13) {
//     spec.innerHTML = racketObj[Object.keys(racketObj)[i]]
//     spec.classList.toggle("spec");
//     comparedRacketCardsData.appendChild(spec)
//     };
//     comparedRacketCardsContainer.appendChild(checkbox2);
//     // comparedRacketCardsContainer.appendChild(hiddenId);
//   };



// };

// const displaySpecList = () => { //this function's role is to display the racket speclist in the comparator
// // console.log('- displaySpecList')
// // let comparedRacketContainer = document.querySelectorAll(".racket-comparator");
// // if (comparedRacketContainer[0].children.length === 0) {
// //   // console.log('-- false');
// //   document.querySelectorAll('.spec').forEach((currentValue) => {
// //     currentValue.style.display = "none";
// //   });
// // } else {
// //   // console.log('-- true');
// //   document.querySelectorAll('.spec').forEach((currentValue) => {
// //     currentValue.style.display = "flex";
// //   });
// // };
// };






//   //   let racketOb = {
//   //   brand: comparedRackets.dataset.brand,
//   //   model: racket.dataset.model,
//   //   weight: racket.dataset.weight,
//   //   headsize: racket.dataset.headsize,
//   //   length: racket.dataset.length,
//   //   swingweight: racket.dataset.swingweight,
//   //   stiffness: racket.dataset.stiffness,
//   //   power: racket.dataset.power,
//   //   manoeuvrability: racket.dataset.manoeuvrability,
//   //   comfort: racket.dataset.comfort,
//   //   control: racket.dataset.control,
//   //   id: racket.dataset.id
//   // };
// //    largeComparator.style.display = "flex";

// //       comparatorContainer.style.backgroundColor = "white";
// //       comparatorContainer.style.boxShadow = "0px 20px 20px -20px #c2bec2";
// //       openComparatorArrow.style.transform = "rotate(-180deg)";
// //       openComparatorArrow.style.transform = "-webkit-transform: rotate(-180deg)";




// // const displayComparator = () => {
// //   const comparatorContainer = document.querySelector('.racket-comparator-container');
// //   const openComparatorArrow = document.querySelector(".open-comparator-arrow");
// //   const shortComparator = document.querySelector('.short-comparator-container');
// //   const largeComparator = document.querySelector('.large-comparator-container');

// //   shortComparator.style.display = "flex";
// //   largeComparator.style.display = "none";

// //   openComparatorArrow.addEventListener("click", () => {
// //     if (comparatorContainer.style.height != "83vh") {
// //       scrollDown(comparatorContainer, 1, 5, 83, "vh");
// //       //fullComparatorDisplay();
// //       largeComparator.style.display = "flex";
// //       shortComparator.style.display = "none";
// //       comparatorContainer.style.backgroundColor = "white";
// //       comparatorContainer.style.boxShadow = "0px 20px 20px -20px #c2bec2";
// //       openComparatorArrow.style.transform = "rotate(-180deg)";
// //       openComparatorArrow.style.transform = "-webkit-transform: rotate(-180deg)";
// //        largeComparatorDisplay()
// //     } else {
// //       scrollUp(comparatorContainer, 1, 5, 83, "vh");
// //       //smallComparatorDisplay()
// //       shortComparator.style.display = "flex";
// //       largeComparator.style.display = "none";
// //       comparatorContainer.style.backgroundColor = "none";
// //       comparatorContainer.style.boxShadow = "none";
// //       openComparatorArrow.style.transform = "rotate(0deg)";
// //       openComparatorArrow.style.transform = "-webkit-transform: rotate(-0deg)";
// //     };
// //   });
// // };



// ############################racket_cards.js###################################



// //   for (let i = 0; i < Object.keys(racketObj).length; i++) {
// //     let specData = document.createElement("div");
// //     specData.classList.toggle("spec-data");
// //     specData.id = i;
// //     shortRacketCard.appendChild(specData);
// //     shortRacketCard.appendChild(checkbox);
// //     shortRacketCard.appendChild(hiddenId);
// //   };

// //   allSpecData = shortRacketCard.querySelectorAll(".spec-data");
// //   allSpecData[0].innerHTML = racketObj.brand;
// //   allSpecData[1].innerHTML = racketObj.model;

// //   //We first select racket-comparator div
// //   // let racketComparator = document.querySelector(".racket-comparator");

// //   // //Then we create the compared-racket-cards div and append it to racket-comparator
// //   // let comparedRacketCards = document.createElement("div");
// //   // comparedRacketCards.setAttribute('class', 'compared-racket-cards');
// //   // racketComparator.appendChild(comparedRacketCards);

// //   // //Then we create the compared-racket-cards-data div that we want to append to compared-racket-cards
// //   // let comparedRacketCardsData = document.createElement("div");
// //   // // We create the racketId hidden input with the attribute data-id so that, on next iteration the function knows that this racket is already selected.


// //   // comparedRacketCards.append(racketId);

// //   // comparedRacketCardsData.setAttribute('class', 'compared-racket-cards-data');
// //   // comparedRacketCards.appendChild(comparedRacketCardsData);
// //   // comparedRacketCards.appendChild(comparedRacketCheckbox);


// //   // //Then we append each values div to the compared rackets data
// //   // comparedRacketCardsData.appendChild(specBrand);
// //   // comparedRacketCardsData.appendChild(specModel);
// //   // comparedRacketCardsData.appendChild(specWeight);
// //   // comparedRacketCardsData.appendChild(specHeadsize);
// //   // comparedRacketCardsData.appendChild(specLenth);
// //   // comparedRacketCardsData.appendChild(specSwingweight);
// //   // comparedRacketCardsData.appendChild(specStiffness);
// //   // comparedRacketCardsData.appendChild(specPower);
// //   // comparedRacketCardsData.appendChild(specManoeuvrability);
// //   // comparedRacketCardsData.appendChild(specComfort);
// //   // comparedRacketCardsData.appendChild(specControl);

// //   //   //Finally we apply some style to the new divs we created
// //   // //comparedRacketCards style
// //   // comparedRacketCards.style.display = 'flex';
// //   // comparedRacketCards.style.flexDirection = 'column';
// //   // comparedRacketCards.style.alignItems = 'center';
// //   // comparedRacketCards.style.justifyContent = 'space-evenly';
// //   // comparedRacketCards.style.width = '15%';
// //   // comparedRacketCards.style.height = '100%';

// //   // //comparedRacketCardsData style
// //   // comparedRacketCardsData.style.height = '450px';
// //   // comparedRacketCardsData.style.display = "flex";
// //   // comparedRacketCardsData.style.alignItems = "center";
// //   // comparedRacketCardsData.style.flexDirection = "flexDirection";
// //   // comparedRacketCardsData.style.justifyContent = "space-evenly";
// // }

// // const removeRacketFromComparator = (racketEvent) => {
// //   console.log('- removeRacketFromComparator')
// //   racketToRemove = racketEvent.target;
// //   racketToRemove.parentElement.style.animation = "fadeout 2s";
// //   racketToRemove.parentElement.remove();

// //   let racketCardToRemove = document.getElementById(`${racketToRemove.id}`);

// //   if (racketCardToRemove !== null) {
// //     racketCardToRemove.checked = false;
// //     // selectCardStyle(racketCardToRemove);

// //   };
// // };


// //-----------------------------clickable card-----------------------------------
// const clickableCard = () => {
//   document.querySelectorAll('.card-item-description').forEach((card) => {
//     const clickableCard = card.querySelector(".card-top")
//     clickableCard.addEventListener('click', () => {
//     location.href = card.getElementsByClassName("see-more-link")[0].href; //redirects to the racket show page
//   });
//   });
// };
// //------------------------------------------------------------------------------



// //-------------------------select compare button--------------------------------

// //on turbolinks load
// //  when the racket card is clicked it needs to:
// // -remove or add the style from the racket card
// //  when the the compared racket checkbox is checked it needs to:
// // -uncheck the racket card checkbox
// // -remove the style from the racket card

// const racketCard = () => {
//   const allRacketCheckbox = document.querySelectorAll('input.racket-checkbox, input.compared-racket-checkbox')
//   const allRacketCardCheckbox = document.querySelectorAll('input.racket-checkbox');
//   //allRacketCardCheckbox.forEach(checkbox => {
//     //checkbox.style.display = "none"
//   //})

//   allRacketCheckbox.forEach(checkbox => { //add event listener on the checkbox of racket cards and compared racket cards
//     checkbox.addEventListener("click", event => {
//       if (event.target.checked === true) {
//         //addRacketCardStyle(event.target);
//       } else {
//         let racketCardCheckbox = document.querySelectorAll('.racket-checkbox');
//         racketCardCheckbox.forEach(checkbox => {
//           if (event.target.id == checkbox.id) {
//             //removeRacketCardStyle(checkbox);
//           };
//         });
//       };
//     });
//   });
// };

// const addRacketCardStyle = (checkbox) => {
//   checkbox.checked = true;
//   //checkbox.parentElement.style.backgroundColor = "#205CA5";
//   checkbox.parentElement.parentElement.parentElement.parentElement.style.boxShadow = "1px 1px 10px #bfbfbf";
//   checkbox.parentElement.parentElement.parentElement.parentElement.style.border = "1px solid #205CA5";
//   checkbox.nextElementSibling.innerText = "Remove";
//   checkbox.nextElementSibling.style.border = "1px solid red";
// };

// const removeRacketCardStyle = (checkbox) => {
//   checkbox.checked = false;
//   checkbox.parentElement.style = "none";
//   checkbox.parentElement.parentElement.parentElement.parentElement.style = "none";
//   checkbox.nextSibling.style = "none";
//   checkbox.nextElementSibling.innerText = "Compare"
// }

// const onLoadCardStyle = () => {
//   let racketCheckbox = document.querySelectorAll('.racket-checkbox');
//   racketCheckbox.forEach((checkbox) => {
//     if (checkbox.checked === true) {
//       //addRacketCardStyle(checkbox)
//     } else {
//       //removeRacketCardStyle(checkbox)
//     };
//   });
// };



//-----------------------------former work done---------------------------------

// const selectCardStyle = (checkbox) => {
//   if (checkbox.checked === true) {
//     checkbox.parentElement.style.backgroundColor = "#205CA5";
//     checkbox.parentElement.parentElement.parentElement.parentElement.style.boxShadow = "1px 1px 10px #bfbfbf";
//     checkbox.parentElement.parentElement.parentElement.parentElement.style.border = "1px solid #205CA5";
//     checkbox.nextElementSibling.innerText = "Added!";
//   } else {
//     checkbox.parentElement.style = "none";
//     checkbox.parentElement.parentElement.parentElement.parentElement.style = "none";
//     checkbox.nextSibling.style = "none";
//     checkbox.nextElementSibling.innerText = "Compare"
//   };
// };



// const selectCard = () => {
//   console.log("card-style")
//   let allCheckboxes = document.querySelectorAll('.racket-checkbox');
//   console.log(allCheckboxes)
//   allCheckboxes.forEach((checkbox) => {
//     checkbox.style.display = 'none';
//     selectCardStyle(checkbox);
//     checkbox.addEventListener('change', (event) => {

//       displaySpecList();
//       selectCardStyle(event.target);
//     });
//   });
//   const allComparedCheckboxes = document.querySelectorAll('.compared-racket-checkbox')
//   console.log(allComparedCheckboxes)
//   allComparedCheckboxes.forEach((checkbox) => {

//     checkbox.addEventListener('change', (event) => {
//       console.log(event)

//       allCheckboxes.forEach(checkbox => {
//         if (event.target.checked === false && event.target.id == checkbox.id){
//           checkbox.checked = false
//           checkbox.parentElement.style = "none";
//           checkbox.parentElement.parentElement.parentElement.parentElement.style = "none";
//           checkbox.nextSibling.style = "none";
//           checkbox.nextElementSibling.innerText = "Compare"
//         }
//       })


//     })
//   });

// };

/*document.addEventListener('ajax:success', function() {


    console.log(13)
    document.querySelector('.racket-checkbox').style.display = 'none';

    let allCheckbox = document.querySelectorAll('.racket-checkbox');
      allCheckbox.forEach(
        function (checkbox) {
        checkbox.style.display = 'none';
        checkbox.addEventListener('change', function() {
        selectCardStyle(checkbox);
      });
    });
  });*/

//$( document ).on('turbolinks:load', function() {
  //
//window.onload = function(){

//let allCheckbox = document.querySelectorAll('.racket-checkbox');

//allCheckbox.forEach(
  //function(currentValue){
    //if (currentValue.checked === true) {
    //currentValue.parentElement.style.backgroundColor = "#c1f9a2";
    //}
  //});
  //};

  //$(document).ready(function(){
    //$('.racket-checkbox').hide()
    //$('.racket-container').on('change', '.racket-checkbox', function() {
      //if(this.checked) {

        //console.log(document.getElementsByClassName('racket-checkbox'));
        //(this).parentElement.style.backgroundColor = "#c1f9a2";
      //  console.log("couille");
      //console.log((this));
      //console.log((this).nextSibling);
    //} else {
      //console.log(document.getElementsByClassName('.racket-checkbox'));
      //(this).parentElement.style = "none";
      //(this).nextSibling.style = "none";
      //console.log("sexe")
      //console.log((this))
      //console.log((this).parentElement)
      //console.log(document.querySelector('#selected_racket_id_').parentElement)
    //}
    //});;
  //});
//});


//$( document ).on('turbolinks:load', function() {
//$('racket-checkbox').each(function() {
  //          if (this.checked = true) {
    //          (this).parentElement.style.backgroundColor = "#c1f9a2";
      //      }
        //});
  //});
//if (document.querySelector('.racket-checkbox').checked) {

//}
//$( document ).on('turbolinks:load', function () {
//        if (document.querySelector('.racket-checkbox').checked) {
//          console.log(document.querySelector('.racket-checkbox').value);
//          document.querySelector('.racket-checkbox').parentElement.style.backgroundColor = "#c1f9a2";
//            alert("checked");
//        } else {
//          document.querySelector('.racket-checkbox').parentElement.style = "none";


//            alert("You didn't check it! Let me check it for you.");
//        }
//    })

//------------------------------------------------------------------------------

//var parent = document.createElement(".racket-compare-button");
//var p = document.createElement("p");
//parent.append(p);

//console.log(parent.childNodes)


//-----------------------former code below--------------------------------------

//$(function () {
  //$('.select-racket-form input[type=submit]').remove();
  //$('.select-racket-form input[type=checkbox]').click(function(){
    //if ($(this).is(':checked')) {
      //$(this).parents('form').submit();

      //console.log('select racket checked')
      //}
      //else if ($(this).not(':checked')) {
        //$(this).parents('form').submit();

        //console.log('select racket unchecked')
      //}
  //});
  //$('.racket-link').hide();
  //$(".card-item-description").click(function(){
    //window.location = $(this).find("a").attr("href");
    //return false;
  //});
//});

// ###############################################################################
// ###############################################################################
// ###############################################################################
// ###############################################################################


//document.addEventListener("turbolinks:load", () => {

  // const leftTennisCourt = document.querySelector('.left-tennis-court');
  // const rightTennisCourt = document.querySelector('.right-tennis-court');
  // const leftExteriorLines = new ExpandSquare(leftTennisCourt, 0, 50, 0, 0, 18)
  // const rightExteriorLines = new ExpandSquare(rightTennisCourt, 0, 50, 0, 0, 18)

  // const leftTopHalfLeft = document.querySelector('.left-top-half-left');
  // const leftBottomHalfLeft = document.querySelector('.left-bottom-half-left');
  // const rightTopHalfRight = document.querySelector('.right-top-half-right');
  // const rightBottomHalfRight = document.querySelector('.right-bottom-half-right');

  // const topLeftBaseline = new ExpandSquare(leftTopHalfLeft, 0, 0, 0, 100, 10);
  // const bottomLeftBaseline = new ExpandSquare(leftBottomHalfLeft, 0, 0, 0, 100, 10);
  // const topRightBaseline = new ExpandSquare(rightTopHalfRight, 0, 0, 0, 100, 10);
  // const bottomRightBaseline = new ExpandSquare(rightBottomHalfRight, 0, 0, 0, 100, 10);
  // topLeftBaseline.expand();
  // bottomLeftBaseline.expand();
  // topRightBaseline.expand();
  // bottomRightBaseline.expand();

  // const leftTopHalfRight = document.querySelector('.left-top-half-right');
  // const leftBottomHalfRight = document.querySelector('.left-bottom-half-right');
  // const rightTopHalfLeft = document.querySelector('.right-top-half-left');
  // const rightBottomHalfLeft = document.querySelector('.right-bottom-half-left');

  // const topLeftMidsquare = new ExpandSquare(leftTopHalfRight, 0, 0, 0, 100, 6);
  // const bottomLeftMidsquare = new ExpandSquare(leftBottomHalfRight, 0, 0, 0, 100, 6);
  // const topRightMidsquare = new ExpandSquare(rightTopHalfLeft, 0, 0, 0, 100, 6);
  // const bottomRightMidsquare = new ExpandSquare(rightBottomHalfLeft, 0, 0, 0, 100, 6);


  // const bottomLeftCenterline = document.querySelector('.bottom-left-mid-line');
  // const topLeftCenterline = document.querySelector('.top-left-mid-line');
  // const topRightCenterline = document.querySelector('.top-right-mid-line');
  // const bottomRightCenterline = document.querySelector('.bottom-right-mid-line');
  // //const leftTopHalfRight = document.querySelector('.left-top-half-right');
  // const bottomLeftCenter = new ExpandSquare(bottomLeftCenterline, 0, 100, 0, 100, 6);
  // const topLeftCenter = new ExpandSquare(topLeftCenterline, 0, 100, 0, 100, 6);
  // const topRightCenter = new ExpandSquare(topRightCenterline, 0, 100, 0, 100, 6);
  // const bottomRightCenter = new ExpandSquare(bottomRightCenterline, 0, 100, 0, 100, 6);


  // const mid()

  //fadeIn(document.querySelector('.home-link-container'));
   //console.log(function(){topLefttMidline.expand()}, 1000)
//});
// createSideLines(createInnerLines)
  // const cul1 = new ExpandSquare(leftTopHalfRight, 0, 0, 0, 50, 10);
  // const cul2 = new ExpandSquare(leftBottomHalfRight, 0, 0, 0, 50, 10);
  // const cul3 = new ExpandSquare(rightTopHalfLeft, 0, 0, 0, 50, 10);
  // const cul4 = new ExpandSquare(rightBottomHalfLeft, 0, 0, 0, 50, 10);

  // if (parseInt(rightTennisCourt.style.width) == 50) {
  // cul1.expand();
  // cul2.expand();
  // cul3.expand();
  // cul4.expand();
  //console.log(ExpandSquare.prototype.expandHeight)

  //   ExpandSquare.prototype.expandHeight = function(callback) {
  //     //console.log(this.expandWidth())
  //     callback.call(this)
  //   }

  //   function foo() {
  //     console.log(this.expandWidth())
  //     console.log(this.isDone)
  // }

  // var t = new ExpandSquare(leftTennisCourt, 0, 50, 0, 0, 18);
  //   t.expandWidth(foo);

//   function foo() {
//      console.log(this.element);
//  }



//  cul1.expandHeight(foo);  // Alerts "Joe" via `foo`
// cul2.expandHeight(foo)



// function Thing(name) {
//     this.name = name;
// }
// Thing.prototype.doSomething = function(callback) {
//     // Call our callback, but using our own instance as the context
//     callback.call(this);
// }

// function foo() {
//     alert(this.name);
// }

// var t = new Thing('Joe');
// t.doSomething(foo);  // Alerts "Joe" via `foo`


// const homepageFadein = () => {
//    fadeIn(document.querySelector('.home-link-container'));
// };

// const tennisCourt = () => {
  // const leftTennisCourt = document.querySelector('.left-tennis-court');
  // const rightTennisCourt = document.querySelector('.right-tennis-court');

  // const leftTopHalfLeft = document.querySelector('.left-top-half-left');
  // const leftTopHalfRight = document.querySelector('.left-top-half-right');
  // //leftTopHalfLeft.style.borderLeft = 'solid 6px white';
  // //leftTopHalfRight.style.borderLeft = 'solid 6px white';

  // const leftBottomHalfLeft = document.querySelector('.left-bottom-half-left');
  // const leftBottomHalfRight = document.querySelector('.left-bottom-half-right');
  // // leftBottomHalfLeft.style.borderLeft = 'solid 6px white';
  // // leftBottomHalfRight.style.borderLeft = 'solid 6px white';

  // const rightTopHalfLeft = document.querySelector('.right-top-half-left');
  // // const rightTopHalfRight = document.querySelector('.right-top-half-right');
  // rightTopHalfLeft.style.borderRight = 'solid 6px white';
  // rightTopHalfRight.style.borderRight = 'solid 6px white';

  // const rightBottomHalfLeft = document.querySelector('.right-bottom-half-left');
  //const rightBottomHalfRight = document.querySelector('.right-bottom-half-right');
  // rightBottomHalfLeft.style.borderRight = 'solid 6px white';
  // rightBottomHalfRight.style.borderRight = 'solid 6px white';

  // const topLeftMidline = document.querySelector('.top-left-mid-line');
  // const bottomLeftMidline = document.querySelector('.bottom-left-mid-line');
  // const topRightMidline = document.querySelector('.top-right-mid-line');
  // const bottomRightMidline = document.querySelector('.bottom-right-mid-line');
  // topLeftMidline.style.borderBottom = 'solid 3px white';
  // bottomLeftMidline.style.borderTop = 'solid 3px white';
  // topRightMidline.style.borderBottom = 'solid 3px white';
  // bottomRightMidline.style.borderTop = 'solid 3px white';

  // topLeftMidline.style.borderRight = 'solid 3px white';
  // bottomLeftMidline.style.borderRight = 'solid 3px white';
  // topRightMidline.style.borderLeft = 'solid 3px white';
  // bottomRightMidline.style.borderLeft = 'solid 3px white';

  // let width = 0;
  // let width2 = 0;
  // let height = 0;
  // let height2 = 0;
  // let height3 = 0;


  // const id = setInterval(horizontalFrame, 18);
  // function horizontalFrame() {
  //   if (width == 50) {
  //     clearInterval(id);
  //   } else {
  //     width++;
  //     leftTennisCourt.style.width = width + "%";
  //     rightTennisCourt.style.width = width + "%";
  //   };
  // };

  // const id2 = setInterval(verticalFrame, 7);
  // function verticalFrame() {
  //   if (height == 100) {
  //     clearInterval(id2);
  //   } else {
  //     height++;
  //     leftTopHalfLeft.style.height = height +"%";
  //     leftBottomHalfLeft.style.height = height +"%";
  //     rightTopHalfRight.style.height = height +"%";
  //     rightBottomHalfRight.style.height = height +"%";
  //   };
  // };
  // const id3 = setInterval(middleVerticalFrame, 5);
  // function middleVerticalFrame() {
  //   if (height2 == 100) {
  //     clearInterval(id3);

  //   } else if (parseInt(rightTennisCourt.style.width) == 50){
  //     height2++;
  //     leftTopHalfRight.style.height = height2 +"%";
  //     leftBottomHalfRight.style.height = height2 +"%";
  //     rightTopHalfLeft.style.height = height2 +"%";
  //     rightBottomHalfLeft.style.height = height2 +"%";
  //   };
  // };

//   const id4 = setInterval(midlineFrame, 5);
//   function midlineFrame() {
//     if (width2 == 100 && height3 == 100) {
//       clearInterval(id4);

//     } else if (parseInt(topLeftMidline.style.width) == 100) {
//       height3++
//       topLeftMidline.style.height = height3 +"%";
//       bottomLeftMidline.style.height = height3 +"%";
//       topRightMidline.style.height = height3 +"%";
//       bottomRightMidline.style.height = height3 +"%";

//     } else if (parseInt(leftBottomHalfRight.style.height) == 100) {
//       width2++;
//       topLeftMidline.style.width = width2 +"%";
//       bottomLeftMidline.style.width = width2 +"%";
//       topRightMidline.style.width = width2 +"%";
//       bottomRightMidline.style.width = width2 +"%";
//     };
//   };
// };









//######################### former work below ##################################
// const cookieExists = (cname) => {
//   const decodedCookies = decodeURIComponent(document.cookie);// We get all the cookies and decode it into a string.
//   if (decodedCookies.includes(cname) === false) {
//     return false;
//   } else {
//     return true;
//   };

// };


// const createCookie = (cname, cvalue) => {
//   let cookieArray = [];
//   cookieArray.push(cvalue);
//   cookieArray = cookieArray.flat();
//   document.cookie = `${cname}${encodeURIComponent(JSON.stringify({"racket_id":cookieArray}))}; path=/`;
//   // console.log(`-- cookie created and contains cookie array: ${cookieArray}`);
// };


// const getCookieValue = (cname) => {
//   const decodedCookies = decodeURIComponent(document.cookie);
//   const allDecodedCookies = decodedCookies.split(';');

//   for(var i = 0; i <allDecodedCookies.length; i++) { //We iterate in the array of cookies to retrieve all cookies
//     if (allDecodedCookies[i].includes(cname)) { //If the cookies array contains the selected_rackets cookie
//     const selectedRacketCookie = allDecodedCookies[i].trim();
//     const cvalue = JSON.parse(selectedRacketCookie.substring(cname.length)); //We parse the selected_racket cookie into an object containing what interests us: the array of racket ids that are already in the comparator
//     return cvalue
//     //console.log(`cookie value = ${cvalue}`)
//     };
//   };
// };


// const updateCookieValue = (cvalue, newvalue, condition) => {
//   if (condition == true) {
//     cvalue.push(newvalue);
//   } else {
//     const index = cvalue.indexOf(newvalue);
//     if (index > -1) {
//       cvalue.splice(index, 1);
//     };
//   };
//   return cvalue;
//   //console.log("cookie value updated")
// };



// // function removeRacketIdFromCookies(event) {
// //    console.log('- removeRacketIdFromCookies')
// //   let decodedCookies = decodeURIComponent(document.cookie);// We get all the cookies and decode it into a string.
// //   let allDecodedCookies = decodedCookies.split(';'); // We split the different cookies and put them in an array
// //   const selectedRacket = "selected_racket" + "=";

// //   for(var i = 0; i <allDecodedCookies.length; i++) { //We iterate in the array of cookies to retrieve all cookies
// //     if (allDecodedCookies[i].includes(selectedRacket)) { //If the cookies array contains the selected_rackets cookie
// //       let selectedRacketCookie = allDecodedCookies[i].trim();
// //       let selectedRacketObj = JSON.parse(selectedRacketCookie.substring(selectedRacket.length)); //We parse the selected_racket cookie into an object containing what interests us: the array of racket ids that are already in the comparator
// //       document.cookie = 'selected_racket=; expires=Thu, 2 Aug 2001 20:47:11 UTC'; // We delete the selected_racket cookie in order to reassign it later with the new checked racket array
// //       let racketChecked = selectedRacketObj.racket_id; //We assign the array of racket ids that were in the selected_racket cookie to racketChecked

// //       //removing racket from racketChecked array
// //       let racketIndex = racketChecked.indexOf(event.target.value);
// //         if (racketIndex > -1) {
// //           racketChecked.splice(racketIndex, 1);
// //         };
// //       // console.log('-- racket removed from racketChecked array');
// //       racketChecked = racketChecked.flat();
// //       selectedRacketObj = {"racket_id":racketChecked};
// //       document.cookie = `selected_racket=${encodeURIComponent(JSON.stringify(selectedRacketObj))}; path=/`;// Saving the new racketChecked array into the newly created selected_racket cookie
// //     };
// //   };
// // };


// // if (thisRacket.target.checked == true) {//adding racket to racketChecked array
//         //       // console.log('-- adding racket to racketChecked array');
//         //   selectedRacketCookie.push(thisRacket.target.value);

//         // } else {//removing racket from racketChecked array
//         //   // console.log('-- removing racket from racketChecked array');
//         //   const racketIndex = selectedRacketCookie.indexOf(thisRacket.target.value);
//         //   if (racketIndex > -1) {
//         //     selectedRacketCookie.splice(racketIndex, 1);
//         //     };
//         //     console.log(selectedRacketCookie)
//         // };


//         // for(var i = 0; i <allDecodedCookies.length; i++) { //We iterate in the array of cookies to retrieve all cookies
//         //   if (allDecodedCookies[i].includes(selectedRacket)) { //If the cookies array contains the selected_rackets cookie
//         //   let selectedRacketCookie = allDecodedCookies[i].trim();
//         //   let selectedRacketObj = JSON.parse(selectedRacketCookie.substring(selectedRacket.length)); //We parse the selected_racket cookie into an object containing what interests us: the array of racket ids that are already in the comparator
//         //   document.cookie = 'selected_racket=; expires=Thu, 2 Aug 2001 20:47:11 UTC'; // We delete the selected_racket cookie in order to reassign it later with the new checked racket array
//         //   let racketChecked = selectedRacketObj.racket_id; //We assign the array of racket ids that were in the selected_racket cookie to racketChecked

//         //     if (thisRacket.target.checked == true) {//adding racket to racketChecked array
//         //       // console.log('-- adding racket to racketChecked array');
//         //       racketChecked.push(thisRacket.target.value);

//         //     } else if (thisRacket.target.checked == false) {//removing racket from racketChecked array
//         //       // console.log('-- removing racket from racketChecked array');

//         //       let racketIndex = racketChecked.indexOf(thisRacket.target.value);
//         //       if (racketIndex > -1) {
//         //         racketChecked.splice(racketIndex, 1);
//         //       };
//         //     };
//         //     racketChecked = racketChecked.flat();
//         //     selectedRacketObj = {"racket_id":racketChecked};
//         //     document.cookie = `selected_racket=${encodeURIComponent(JSON.stringify(selectedRacketObj))}; path=/`;// Saving the new racketChecked array into the newly created selected_racket cookie
//         //     console.log(`-- selected_racket cookie updated with the new racketChecked array ${racketChecked}`);
//         //   };
//         // };


// //create cookie
// //get cookie
// //delete cookie
// //update cookie









// //on page load:
//     // - serveur retrieves de cookie:  if cookie exists => displays the rackets
//     // -if cookie doesn't exist => create it
//   // - set cookie to be equal to the rackets in the comparator

// // on clicks on the rackets the cookie has to be updated:
//   // - if cookie contains the racket id => remove it
//   // - if cookie doesn't contain the racket id => add it


// // document.addEventListener("turbolinks:load", () => {

// //   console.log("bite")
// //     document.cookie = "selected_racket=; path=/rackets";


// // })
// // document.addEventListener("turbolinks:load",()=> {
// // window.onload = function() {
// //  document.cookie = "selected_racket=; path=/";
// // }
// // });



// const selectedRacketCookie = () => { //this function's role is to manage the selected racket cookie in order to ensure comparision persistency on page reload/navigation
//   const allRackets = document.querySelectorAll('input.racket-checkbox, input.compared-racket-checkbox'); // When a racket checkbox is checked we first retrieve all the cookies and search for the cookie that contains the ids of the rackets displayed in the comparator if it exists.
//   allRackets.forEach((racket) => {
//     racket.addEventListener('click', (thisRacket) => {
//       const selectedRacket = "selected_racket" + "="; //We want to retrieve the selected_racket cookie
//       const cookie = new CookieManager(selectedRacket)
//       if (cookie.cookieExists() === false) { //If the selected_racket cookie doesnt exist, we have to create it and push the checked racket into it as an array
//         cookie.createCookie();

//       } else { //If the selected_racket cookie already exists, we have to get its value, update its value, save it in a newly created selected_racket cookie

//         const selectedRacketCookieValue = cookie.getCookieValue().racket_id;
//         cookie.cvalue = selectedRacketCookieValue
//         //console.log(selectedRacketCookieValue)
//         const newCookieValue = cookie.updateCookieValue(thisRacket.target.value, thisRacket.target.checked);

//         cookie.createCookie();
//       };
//     });
//   });
// };

// const updateSelectedRacketCookie = (newValue, condition) => {
//   const cookieValue = getCookieValue("selected_racket" + "=").racket_id;
//   const newCookieValue = updateCookieValue(cookieValue, newValue, condition);
//   createCookie("selected_racket" + "=", newCookieValue);
// };
