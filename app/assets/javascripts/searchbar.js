class Searchbar {
  constructor() {
    this.searchField = document.querySelector(".type-search");
  }

  init() {
    this.initSearchbar();
    this.clearSearch();
    this.initPagination();
  }

  displaySearch(searchbarCheckboxes, searchField, page) {
    // const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox')
    const racketsInContainer = document.querySelectorAll('.racket-checkbox');
    const search = new RacketSearchDisplay(searchbarCheckboxes, searchField, page, racketsInContainer);
    search.racketsUpdate();
    const pagination = new PaginationStyle()
    pagination.initOnLoad()
  }

  initSearchbar() { //this inits the search function of the app. It creates a RacketSearchDisplay objects which will display the rackets the user is searching for. The racket search is async (fetch db).
    const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox')
    this.searchField.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.displaySearch([], this.searchField, "[0,40]")
      };
    });

    searchbarCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.displaySearch(searchbarCheckboxes, '',  "[0,40]");
      });
    });
  }

  clearSearch() { //this function removes all the checked checkboxes and reinitialize the racket search (racket container will contain all rackets)
    document.querySelector('.clear-search').addEventListener('click', (event) => {
      event.preventDefault();

      const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
      searchbarCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      this.displaySearch(searchbarCheckboxes, "")
    });
  }

  initPagination() { //this function allows the user to go to the next page (actually it removes the rackets in container and loads the 40 rackets corresponding)
    const pagination = new PaginationStyle()
    pagination.initOnLoad()

    document.querySelectorAll('.pagination, .next, .previous').forEach(page => {
      page.addEventListener('click', event => {
        event.preventDefault()
        const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
        const searchField = document.querySelector(".type-search");
        const racketsInContainer = document.querySelectorAll('.racket-checkbox');

        const search = new RacketSearchDisplay(searchbarCheckboxes, '', event.target.dataset.page, racketsInContainer);
        search.racketsUpdate();
      })
    });
  }
}




