class App {

  init() {
    if (window.location.href.match('pages/home') != null || window.location.href === "http://localhost:3000/") {
      this.initHomepageTennisCourt();
    } else if (window.location.href.match('rackets') != null) {
      this.initComparision();
      // this.initAjaxSearch();
      this.initCookies();
      this.initRacketCardStyle();
      searchbarFilterDropdown()
      searchBarDesign();
    }
  }

  initComparision() {
    const comparator = new Comparator();
    comparator.initOnLoad();
  }

  initAjaxSearch() {
    const allSearchbarCheckbox = document.querySelectorAll('.searchbar-checkbox');
    const searchForm = document.querySelector('.search-form');
    const formerRacketContainerParent = document.querySelector('.search-bar-and-racket-cards');
    const racketSearchButton = document.querySelector('.search-button');
    const newRacketContainerSelector = '.racket-container';
    const searchRackets = new AjaxSearch(allSearchbarCheckbox, searchForm, formerRacketContainerParent, newRacketContainerSelector);
    searchRackets.initSearchForm();
  }

  initHomepageTennisCourt() {
    const tennisCourt = new HomepageTennisCourt();
    tennisCourt.init()
  }

  initCookies() {
    const selectedRacket = "selected_racket" + "=";
    const comparedRacketsPersistancy = new ComparedRacketCookie(selectedRacket);
    comparedRacketsPersistancy.init(document.querySelectorAll('input.racket-checkbox, input.compared-racket-checkbox'));
  }

  initRacketCardStyle() {
    const cardsStyle = new RacketCardStyleSelector();
    cardsStyle.initStyleOnLoad();
  }
}

const app = new App();
document.addEventListener("turbolinks:load", () => {
  app.init();
});


// document.addEventListener("ajax:success", (ajaxSearch) => {
//   // app.initAjaxAnswer(ajaxSearch);
//   // app.initComparision(ajaxSearch);
//   // app.initRacketCardStyle();
//   // app.initCookies();
// });


