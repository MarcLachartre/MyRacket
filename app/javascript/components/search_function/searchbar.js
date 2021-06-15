// console.log("SearchBar")
import ScrollReveal from 'scrollreveal';
import {ElementReveal} from '../effects/element_reveal';
import {RacketSearchDisplay, PaginationStyle} from './search_function_file_manager';
import {AnimateThatSearch} from '../effects/animate_that_search';


export class Searchbar extends ElementReveal { // This class's role is to manage the checkbox click event and to be the ochestrator of search through and filter rackets. It also initiates the pagination as the search function makes the amount of rackets vary.
  constructor() {
    super();
    this.searchField = document.querySelector(".type-search");
  }

  init() {
    // console.log("Searcbar init")
    this.initSearchbar();
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
    this.initDropdowns();
    this.initQuickSearch();
    this.initCheckboxSearch()
    this.clearSearch();
    this.containerResizing(".racket-card");
  }

  initQuickSearch() {
    this.searchField.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.displaySearch([], this.searchField, "[0,40]");
      };
    });

    document.querySelector(".quick-search-container").querySelector(".fa-search").addEventListener('click', (event) => {
      this.displaySearch([], this.searchField, "[0,40]");
    });

    document.querySelector(".quick-search").querySelector(".search-category").addEventListener('click', (event) => {
      this.displaySearch([], this.searchField, "[0,40]");
    });
    this.initQuickSearchDesign();
  }

  initCheckboxSearch() {
    const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
    searchbarCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.displaySearch(searchbarCheckboxes, '',  "[0,40]");
      });
    });

    document.querySelector(".filtering").querySelector(".search-category").addEventListener('click', (event) => {
      this.displaySearch(searchbarCheckboxes, '',  "[0,40]");
    });
  }
  
  initQuickSearchDesign() {
    document.querySelector(".type-search").setAttribute("autocomplete", "off")
    const quickSearchDesign = () => {
      if (document.activeElement.classList.value === "type-search") {
        document.querySelector(".quick-search-container").classList.add("quick-search-container-active");
      } else {
        document.querySelector(".quick-search-container").classList.remove("quick-search-container-active"); 
      } 
    }
    
    document.querySelector("#search-bar-items").addEventListener('click', (event) => {
      quickSearchDesign()
    });
  }

  containerResizing(cardsSelector) {
    const initCardsPositions = new AnimateThatSearch();
    initCardsPositions.cardSelector = cardsSelector;
    initCardsPositions.columnsAmount = 4;
    initCardsPositions.resizingSetCardsState(cardsSelector)
  }

  clearSearch() { //this function removes all the checked checkboxes and reinitialize the racket search (racket container will contain all rackets)
    document.querySelector('.clear-search').addEventListener('click', (event) => {
      const searchbarCheckboxes = document.querySelectorAll('.searchbar-checkbox');
      searchbarCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      document.querySelector(".type-search").value = ''
      this.displaySearch([], '', "[0,40]");
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
        const search = new RacketSearchDisplay(searchbarCheckboxes, '', event.target.dataset.pageBatch, racketsInContainer);
        search.racketsUpdate();
      });
    });
  }

  initDropdowns() { // this function makes sure that the user can easily understand that he has to make a choice between which type of search he wants to use. Clicking on one type of search is hiding the other type of search. It also makes sure to adapt the style of the "search-category" element (little dropdown arrow pointing up or down) and applies a fade in effect to the newly displayed search type and to clear search element.
    const quickSearch = document.querySelector(".quick-search"); 
    const filtering = document.querySelector(".filtering");

    const fadeIn = (element, delay, duration) => {
      element.style.opacity = "0";
      element.style.display = "flex";
      element.style.animationDelay = `${delay}ms`;
      element.style.animationDuration = `${duration}ms`;
      element.style.animationName = "fadeIn";
      element.style.animationFillMode = "forwards";
    }

    const clearSearchFadeIn = () => {
      const elm = document.querySelector(".clear-search");
      const newone = elm.cloneNode(true);
      elm.parentNode.replaceChild(newone, elm);
      this.clearSearch();
      fadeIn(document.querySelector(".clear-search"), 0, 1000);
    }

    const elementsArray = (node) => { // the function returns the elements to fade in or to remove. Takes as argument the parent node.
      const elementsArr = [];
      Array.from(node.children).forEach((el) => {
        if (el.className === "filters" ) {
          Array.from(el.children).forEach((e) => {
            elementsArr.push(e);
          });
        } else if (el.className.match("search-container")) {
          elementsArr.push(el);
        } else if (el.className !== "search-category"){
          elementsArr.push(el);
        };
      });
      return elementsArr
    };

    const applyDropdownEffect = (elementsToShow, elementsToHide) => { // applies the fade in effect to the element in the newly displayed search type.
      if (elementsToShow === quickSearch && Array.from(elementsToShow.children)[1].style.display === "none") {
        const elementsToFadeIn = elementsArray(elementsToShow);
        for (let i = 0; i < elementsToFadeIn.length; i++) {
          fadeIn(elementsToFadeIn[i], (i * 30), 500);
        };
      } else if (elementsToShow === filtering && Array.from(elementsToShow.children)[1].style.display === "none") {
        const elementsToFadeIn = elementsArray(elementsToShow)
        for (let i = 0; i < elementsToFadeIn.length; i++) {
          fadeIn(elementsToFadeIn[i], (i * 30), 500);    
        };
      };

      const elementsToRemove = elementsArray(elementsToHide);
      for (let i = 0; i < elementsToRemove.length; i++) { 
        elementsToRemove[i].style.display = "none";
      }; 
    };

    const dropdownsSelection = (elementsToShow, elementsToHide) => { // On click, one type of search is hiding the other type of search and if necessary, the other type of search's elements are fading in. It also makes sure to adapt the style of the "search-category" element (little dropdown arrow pointing up or down) and applies a fade in effect to the newly displayed search type and to clear search element.
      elementsToShow.addEventListener("click", () => { 
        if (elementsToHide.querySelector(".arrow-up") !== null) {
          elementsToHide.querySelector(".arrow-up").classList.add("arrow-down");
          document.getElementsByClassName('arrow-up arrow-down')[0].classList.remove("arrow-up");
          clearSearchFadeIn();
        }
        if (elementsToShow.querySelector('.arrow-down') !== null && elementsToShow.querySelector('.arrow-up') === null) {
          elementsToShow.querySelector('.arrow-down').classList.add("arrow-up");
          document.getElementsByClassName('arrow-down arrow-up')[0].classList.remove("arrow-down");
          clearSearchFadeIn();
        };
        applyDropdownEffect(elementsToShow, elementsToHide);
      });
    };

    dropdownsSelection(quickSearch, filtering); // if using the quick search, its hiding the filters on click and displaying the quick search
    dropdownsSelection(filtering, quickSearch); // if using the filters, its hiding the quick search on click and displaying the filters
  }
}
