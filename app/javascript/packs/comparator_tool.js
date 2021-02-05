import {Comparator} from '../components/comparator_manager/comparator_file_manager';

document.addEventListener( "turbolinks:load", () => {
  if (window.location.href.match('/rackets') != null && document.querySelector('.racket-page-container') !== null) {
    const comparator = new Comparator();
    comparator.initOnLoad();
  };
});



