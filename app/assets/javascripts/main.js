class App {
  constructor() {

  }
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

  initComparision(searchEvent) {
    const comparator = new Comparator();
    comparator.init(searchEvent);
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

  initAjaxAnswer(searchEvent) {
    const allSearchbarCheckbox = document.querySelectorAll('.searchbar-checkbox');
    const searchForm = document.querySelector('.search-form');
    const formerRacketContainerParent = document.querySelector('.search-bar-and-racket-cards');
    const newRacketContainerSelector = '.racket-container'
    const searchRackets = new AjaxSearch(allSearchbarCheckbox, searchForm, formerRacketContainerParent, newRacketContainerSelector)
    searchRackets.updateContainer(searchEvent);
  }

  initHomepageTennisCourt() {
    const tennisCourt = new HomepageTennisCourt();
    tennisCourt.init()
  }

  initCookies() {
    const selectedRacket = "selected_racket" + "=";
    const comparedRacketsPersistancy = new ComparedRacketCookie(selectedRacket);
    comparedRacketsPersistancy.init();
  }

  initRacketCardStyle() {
    const cardsStyle = new RacketCard();
    cardsStyle.initStyleOnLoad();
    cardsStyle.addStyleOnClick();
  }
}

const app = new App();
document.addEventListener("turbolinks:load", () => {
  app.init();
});


document.addEventListener("ajax:success", (ajaxSearch) => {
  // app.initAjaxAnswer(ajaxSearch);
  // app.initComparision(ajaxSearch);
  app.initRacketCardStyle();
  app.initCookies();
});


