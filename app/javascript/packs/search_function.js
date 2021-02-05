import {Searchbar} from '../components/search_function/search_function_file_manager';
// console.log("Search Function")

document.addEventListener("turbolinks:load", () => {
  if (window.location.href.match('rackets') != null && document.querySelector('.racket-page-container') !== null) {
  console.log("searchbar Init Start")
  const searchbar = new Searchbar();
  searchbar.init();
  };
});



