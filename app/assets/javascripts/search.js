//------------------async submition of the racket search form-------------------
const formSubmit = () => {


  let allSearchbarCheckbox = document.querySelectorAll('.searchbar-checkbox');

  allSearchbarCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      checkbox.parentElement.classList.toggle('label-design-selected'); //apply style
      searchForm = document.querySelector('.search-form');
      Rails.fire(searchForm, 'submit');
    });
  });

  let removeFilter = document.querySelector('.clear-search');
  removeFilter.addEventListener('click', () => {
    allSearchbarCheckbox.forEach((checkbox) => {
      checkbox.checked = false;
    });
    searchForm = document.querySelector('.search-form');
    Rails.fire(searchForm, 'submit');
  });
  //let typeSearch = document.querySelector('.type-search');
  //typeSearch.addEventListener('keyup', () => {
    //searchForm = document.querySelector('.search-form');
    //Rails.fire(searchForm, 'submit');
  //});
};
//------------------------------------------------------------------------------

//------------------updating the racket container with XML response-------------
const racketContainerUpdate = searchEvent => {
  let newSearchDocumentBody = searchEvent.detail[0].body;
  let newRacketContainer = newSearchDocumentBody.querySelector('.racket-container');
  let formerRacketContainer = document.querySelector('.search-bar-and-racket-cards');
    formerRacketContainer.replaceChild( newRacketContainer ,formerRacketContainer.children[1])
  document.querySelector('.search-button').style.display = 'none';
};
//------------------------------------------------------------------------------

//-----------------------------searchbar design---------------------------------

const searchbarClickScroll = () => { //this function's role is to make the user scroll down automatically when the quick search is clicked.
  let typeSearch = document.querySelector('.type-search');
  typeSearch.addEventListener('click', () => {

    const quickSearch = document.querySelector('.quick-search-container');
    const navbar = document.querySelector('.myracket-navbar');
    window.scrollBy(0, quickSearch.getBoundingClientRect().y - quickSearch.offsetHeight/2);
    const quickSearchBox = document.querySelector('.quick-search-box');
    fadeOut(quickSearchBox)
    quickSearchBox.style.transform = "translate(0px,0px)";
    quickSearchBox.style.height = "100%";
    quickSearchBox.style.background = "transparent";
    quickSearch.style.backgroundColor = "white";
    fadeIn(quickSearchBox)
  });
};

const searchBarDesign = () => {
  const allSearchbarCheckbox = document.querySelectorAll('.searchbar-checkbox');
  document.querySelector('.search-button').style.display = 'none';
  allSearchbarCheckbox.forEach((checkbox) => {
    checkbox.style.display = 'none';
  });
};

const searchbarFilterDropdown = () => {// this function's role is to create the search dropdown
  const filterTypes = document.querySelectorAll('.filter-type');
  const arrowDown = document.querySelector('.arrow-down');

  filterTypes.forEach((filterType) => {
    filterType.addEventListener('click', () => {
      filterType.nextElementSibling.classList.toggle("show-filters");
      filterType.getElementsByClassName('arrow-down');
       for(const value of filterType.childNodes.values()) {
        if (value.nodeName === "P") {
          value.childNodes[1].classList.toggle("arrow-up");
        };
      };
    });
  });
};

const searchbarFilters = () => { //this function's role is to set the design of the searchbar filters on click
  const filters = document.querySelectorAll('.label-design');
  console.log(filters);
  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      // console.log(filter)
      //filter.classList.toggle(".label-design-selected")
    });
  });
};



//------------------------------former work-------------------------------------

//console.log(1)
      /*Rails.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "rackets",
      dataType: "json",
      //data: checkbox.dataset.brand,
      success: function (data) {
console.log(data)

         //alert(JSON.stringify(data));
      },

      error : function(data) {

      }
    });*/
      //fetch("/rackets")
        //.then(response => response.json())

        //.then((data) => {
      //console.log(data);
    //});
      //Rails.ajax({
        //dataType: "json",
        //type: "GET",
        //url: "/rackets",
        //success:function(data){

          //console.log(data.body)
//console.log($(".racket-container")[0].innerHTML)
//Rails.$(".racket-container")[0].innerHTML = data.body;

//})
//const myImage = document.querySelector('img');

/*fetch('flowers.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});*/
/*$(document).ready(function(){
  $('.search-button').remove();
  $('.search-bar').on('click','.search-form input[type=checkbox]',function(){
    $('.search-form').submit();
    $('.racket-container').fadeOut(100);
    $('.search-button').remove();
  });
});
*/




//$(document).ready(function(){
  //$('.racket-container').on('change','.racket-checkbox', function(){
    //$('.select-racket').submit();
    //$('.response-comparator').fadeOut(500)
    //$('.search-button').remove();
  //});
//})

//$(document).ready(function(){
  //$('.racket-comparator').on('click','.remove-button', function(){
    //$('.select-racket').submit();
    //$('.search-button').remove();
  //});
//});



//$(document).ready(function(){
  //$('.racket-card').click(function(k){
    //$('<%= dom_id(racket) %>').prop('checked', true);
    //$('.dom_id(racket)').prop('checked', true);
    //$('.select-racket').submit();
    //$('.search-button').remove();
  //});
//});


//$(document).ready(function(){
//  $( '.see-more-link' )
//    .on('mouseover', function() {
//      $('.see-more-link')
//        .toggleClass( ".active")

          //alert($('.racket-card').find('.racket-link').children())
//    });
//  })
  //$(document).ready(function(){
//$('racket-checkbox').click(function(){
  //    if ($(this).is(':checked')) {
    //    $('.search-form').submit();
      //  console.log('search js checkbox checked');
      //}
      //else if ($(this).not(':checked')) {
       // $('.search-form').submit();
        //console.log('search js checkbox NOT checked');
      //};
    //});

    //});

