class RacketCardDesign{
  constructor(racketCards){
    this.racketCards = racketCards
  }

  init(){
    this.clickableCard();
    this.racketCards.forEach((checkbox) => {
      if (checkbox.checked === true) {
        this.selectedCardStyle(checkbox);
      } else {
        this.initialCardStyle(checkbox);
      };
    });
  }

  displayStyleOnClick() {
    this.racketCards.forEach(checkbox => { //add event listener on the checkbox of racket cards to remove their display
      checkbox.addEventListener("click", event => {
        if (event.target.checked === true) {
          const comparedRackets = document.querySelectorAll('input.compared-racket-checkbox');
          this.selectedCardStyle(event.target);
          this.addRemoveRacketCardStyleListener(event.target, comparedRackets);
        } else {
          this.initialCardStyle(event.target);
        };
      });
    });
  }

  addRemoveRacketCardStyleListener(racketCheckbox, racketsNodelist) { //add event listener on the checkbox of compared racket cards to remove the display of racket cards. First parameter corresponds to the racket card checkbox, second one corresponds to another nodelist containing its matching checkbox (for example, compared racket checkbox)
    racketsNodelist.forEach(racketNode => {
      if (racketNode.id === racketCheckbox.id) {
        racketNode.addEventListener('change', () => {
          this.initialCardStyle(racketCheckbox);
        });
      };
    });
  }

  selectedCardStyle(checkbox){
    checkbox.checked = true;
    checkbox.parentElement.parentElement.parentElement.parentElement.style.boxShadow = "1px 1px 10px #bfbfbf";
    checkbox.parentElement.parentElement.parentElement.parentElement.style.border = "1px solid #205CA5";
    checkbox.nextElementSibling.innerText = "Remove";
    checkbox.nextElementSibling.style.border = "1px solid red";
  }

  initialCardStyle(checkbox){
    checkbox.checked = false;
    checkbox.parentElement.style = "none";
    checkbox.parentElement.parentElement.parentElement.parentElement.style = "none";
    checkbox.nextSibling.style = "none";
    checkbox.nextElementSibling.innerText = "Compare";
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

document.addEventListener('turbolinks:load', () => {
  const racketCards = document.querySelectorAll('.racket-checkbox');
  const cardsStyle = new RacketCardDesign(racketCards);
  cardsStyle.init()
  cardsStyle.displayStyleOnClick()
})

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

