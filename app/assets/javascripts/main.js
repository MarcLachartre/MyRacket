class App {
  init() {
    if (window.location.href.match('pages/home') != null || window.location.href === "http://localhost:3000/") {
      this.initHomepage();
    } else if (window.location.href.match('rackets/') != null) {
      this.initRacketReviews()
    } else if (window.location.href.match('rackets') != null) {
      this.initComparision();
      this.initCookies();
      this.initRacketCardStyle();
      this.initSearch();
    }
  }

  initComparision() {
    const comparator = new Comparator();
    comparator.initOnLoad();
  }

  initHomepage() {
    const tennisCourt = new HomepageTennisCourt();
    tennisCourt.init()
  }

  initCookies() {
    const selectedRacket = "selected_racket" + "=";
    const comparedRacketsPersistancy = new ComparedRacketCookie(selectedRacket);
    comparedRacketsPersistancy.init(document.querySelectorAll('input.racket-checkbox, input.compared-racket-checkbox'));
  }

  initSearch() {
    const searchbar = new Searchbar();
    searchbar.init();
  }

  initRacketCardStyle() {
    const cardsStyle = new RacketCardStyleSelector();
    cardsStyle.initStyleOnLoad();
  }

  initRacketReviews() {
    const racketReviews = new RacketReviews();
    racketReviews.init();
  }

}

const app = new App();
document.addEventListener("turbolinks:load", () => {
  app.init();
});




