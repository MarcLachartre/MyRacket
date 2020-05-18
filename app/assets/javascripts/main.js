const onAjaxAndTurbolinksEvents = () => { //functions to be loaded on both turbolinks and ajax events
  if (window.location.href.match('rackets') != null) {
    comparator(); //comparator.js
    onLoadCardStyle(); //racket_card.js
    racketCard(); //racket_card.js
    clickableCard(); //racket_card.js
    Window.onload = selectedRacketCookie(); //selected_racket_cookies.js
  };
};

//Window.onload = selectedRacketCookie()

const onTurbolinksLoad = () => {
  if (window.location.href.match('pages/home') != null) {
  tennisCourt(); //homepage.js
  homepageFadein(); //homepage.js
  } else if (window.location.href.match('rackets') != null) {
  onTurbolinksLoadComparator()
  displaySpecList(); //comparator.js
  searchbarFilterDropdown() //search.js;
  formSubmit(); //search.js
  searchbarClickScroll(); //search.js
  searchBarDesign(); //search.js
  //searchbarFilters(); //search.js
 };
};

document.addEventListener("turbolinks:load", () => {
  // console.log('Functions loaded on turbolinks load: ');
  onTurbolinksLoad();
  onAjaxAndTurbolinksEvents();
});

document.addEventListener("ajax:success", (searchEvent) => {
  // console.log('Functions loaded on ajax success load: ');
  racketContainerUpdate(searchEvent); //search.js
  onAjaxAndTurbolinksEvents();
});
