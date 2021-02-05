// console.log('Homepage');

import {HomepageTennisCourt} from '../components/homepage/tennis_court';

document.addEventListener("turbolinks:load", () => {
  if (window.location.href.match('pages/home') != null || window.location.href === "http://localhost:3000/") {
    const court = new HomepageTennisCourt();
    court.init();
  };
});

