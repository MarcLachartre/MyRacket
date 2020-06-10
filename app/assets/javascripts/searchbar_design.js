class SearchbarDesign {
  constructor() {

  }
}

const searchBarDesign = () => {
  const allSearchbarCheckbox = document.querySelectorAll('.searchbar-checkbox');
  //document.querySelector('.search-button').style.display = 'none';
  allSearchbarCheckbox.forEach((checkbox) => {
    //checkbox.style.display = 'none';
  });
};

const searchbarFilterDropdown = () => {// this function's role is to create the search dropdown
const filterTypes = document.querySelectorAll('.filter-type');
const arrowDown = document.querySelector('.arrow-down');

filterTypes.forEach((filterType) => {
  filterType.addEventListener('click', () => {
    filterType.nextElementSibling.classList.toggle("show-filters");
    filterType.getElementsByClassName('arrow-down');
    for(const value of filterType.childNodes.values()) {
      if (value.nodeName === "P") {
        value.childNodes[1].classList.toggle("arrow-up");
      };
    };
  });
});
};

const searchbarFilters = () => { //this function's role is to set the design of the searchbar filters on click
const filters = document.querySelectorAll('.label-design');
// console.log(filters);
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
      // console.log(filter)
      //filter.classList.toggle(".label-design-selected")
    });
});
};






