const onAjaxAndTurbolinksEvents = () => { //functions to be loaded on both turbolinks and ajax events
  if (window.location.href.match('rackets') != null) {
    //onLoadCardStyle(); //racket_card.js
    //racketCard(); //racket_card.js
    //clickableCard(); //racket_card.js
    Window.onload = selectedRacketCookie(); //selected_racket_cookies.js
  };
};

//Window.onload = selectedRacketCookie()

const onTurbolinksLoad = () => {
  if (window.location.href.match('pages/home') != null) {
  tennisCourt(); //homepage.js
  homepageFadein(); //homepage.js
  } else if (window.location.href.match('rackets') != null) {
  //displaySpecList(); //comparator.js
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


document.addEventListener("turbolinks:load", () => {
  const largeComparator = document.querySelector('.large-comparator-container');
  const shortComparator = document.querySelector('.short-comparator-container');
  const comparator = new Comparator(shortComparator, largeComparator)
  comparator.initDisplay()
  document.querySelectorAll('.racket-checkbox').forEach(racket => {
    racket.addEventListener('click', () => {

      const racketCard = new ComparedRacket(
        racket.dataset.brand,
        racket.dataset.model,
        racket.dataset.headsize,
        racket.dataset.stringpattern,
        racket.dataset.weight,
        racket.dataset.length,
        racket.dataset.swingweight,
        racket.dataset.stiffness,
        racket.dataset.power,
        racket.dataset.manoeuvrability,
        racket.dataset.comfort,
        racket.dataset.control,
        racket.dataset.id
      );
    if (racketCard.isAlreadyInComparator()) {
      racketCard.removeRacketFromComparator();
    } else {
      racketCard.addRacketToComparator();
    };

    });
  });
});
