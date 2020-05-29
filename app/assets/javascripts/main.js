class App {
  constructor() {

  }

  init() {
    if (window.location.href.match('pages/home') != null || window.location.href === "http://localhost:3000/") {
      this.initHomepageTennisCourt();
    } else if (window.location.href.match('rackets') != null) {
      this.initComparatorDisplay();
      this.initRacketComparision();
      this.initAjaxSearch();
      this.initCookies();
      this.initRacketCardStyle();
      searchbarFilterDropdown()
      searchBarDesign();
    }
  }

  initComparatorDisplay() {
    const comparator = new Comparator();
    comparator.initDisplay();
  }

  initRacketComparision() {
    document.querySelectorAll('.racket-checkbox').forEach(racket => {
      racket.addEventListener('click', () => {
        const racketToCompare = new ComparedRacket(racket.dataset.brand, racket.dataset.model, racket.dataset.headsize, racket.dataset.stringpattern, racket.dataset.weight, racket.dataset.length, racket.dataset.swingweight, racket.dataset.stiffness, racket.dataset.power, racket.dataset.manoeuvrability, racket.dataset.comfort, racket.dataset.control, racket.dataset.id);
        racketToCompare.initComparision();
      });
    });
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
    searchRackets.updateContainer(searchEvent)
  }

  initHomepageTennisCourt() {
    const tennisCourt = new HomepageTennisCourt();
    tennisCourt.init()
  }

  initCookies() {
    const selectedRacket = "selected_racket" + "="
    const comparedRacketsPersistancy = new ComparedRacketCookie(selectedRacket)
    Window.onload = comparedRacketsPersistancy.init();
  }

  initRacketCardStyle() {
    const cardsStyle = new RacketCardDesign();
    cardsStyle.initStyleOnLoad();
    cardsStyle.addStyleOnClick();
  }
}

const app = new App();
document.addEventListener("turbolinks:load", (event) => {
  app.init()
})


document.addEventListener("ajax:success", (searchEvent) => {
  app.initAjaxAnswer(searchEvent);
  app.initRacketCardStyle();
  app.initRacketComparision();
  app.initCookies();
});


