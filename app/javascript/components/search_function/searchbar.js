// console.log("SearchBar")
import ScrollReveal from 'scrollreveal';
import {ElementReveal} from '../effects/element_reveal';
import {RacketSearchDisplay, PaginationStyle} from './search_function_file_manager';

export class Searchbar extends ElementReveal { // This class's role is to manage the checkbox click event and to be the ochestrator of search through and filter rackets. It also initiates the pagination as the search function makes the amount of rackets vary.
  constructor() {
    super();
    this.searchField = document.querySelector(".type-search");
  }

  init() {
    // console.log("Searcbar init")
    this.initSearchbar();
    this.clearSearch();
    this.initPagination();
  }

  displaySearch(searchbarCheckboxes, searchField, page) {
    // console.log("display Search")
    const racketsInContainer = document.querySelectorAll('.racket-checkbox');
    const search = new RacketSearchDisplay(searchbarCheckboxes, searchField, page, racketsInContainer);
    search.racketsUpdate();

    const pagination = new PaginationStyle();
    pagination.initOnLoad();
  }

  initSearchbar() { //this inits the search function of the app. It creates a RacketSearchDisplay objects which will display the rackets the user is searching for. The racket search is async (fetch db).
    // console.log("init Searchbar")
    const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
    this.searchField.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.displaySearch([], this.searchField, "[0,40]");
      };
    });

    searchbarCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        // console.log("search started")
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
      this.displaySearch(searchbarCheckboxes, "");
    });
  }

  initPagination() { //this function allows the user to go to the next page (actually it removes the rackets in container and loads the 40 rackets corresponding)
    const pagination = new PaginationStyle();
    pagination.initOnLoad();

    document.querySelectorAll('.pagination, .next, .previous').forEach(page => {
      page.addEventListener('click', event => {
        event.preventDefault();
        const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
        const searchField = document.querySelector(".type-search");
        const racketsInContainer = document.querySelectorAll('.racket-checkbox');

        const search = new RacketSearchDisplay(searchbarCheckboxes, '', event.target.dataset.page, racketsInContainer);
        search.racketsUpdate();
      });
    });
  }
}
