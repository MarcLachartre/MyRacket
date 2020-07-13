class Searchbar {
  constructor() {}

  init() {
    this.initSearch();
    this.clearSearch();
  }

  clearSearch() { //this function removes all the checked checkboxes and reinitialize the racket search (racket container will contain all rackets)
    document.querySelector('.clear-search').addEventListener('click', (event) => {
      const racketsInContainer = document.querySelectorAll('.racket-checkbox');
      const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
      searchbarCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      const search = new RacketSearchDisplay(searchbarCheckboxes, "", racketsInContainer);
      search.racketsToUpdate();
    });
  }

  initSearch() { //this inits the search function of the app. It creates a RacketSearchDisplay objects which will display the rackets the user is searching for. The racket search is async (fetch db).
    const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
    const searchField = document.querySelector(".type-search");
    searchField.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const racketsInContainer = document.querySelectorAll('.racket-checkbox');
        const search = new RacketSearchDisplay([], searchField, racketsInContainer);
        search.racketsToUpdate();
        };
      });

    searchbarCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const racketsInContainer = document.querySelectorAll('.racket-checkbox');
        const search = new RacketSearchDisplay(searchbarCheckboxes, '', racketsInContainer);
        search.racketsToUpdate();
      });
    });
  }
}




