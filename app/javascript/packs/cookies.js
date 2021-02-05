import {ComparedRacketCookie} from "../components/cookies_manager/compared_racket_cookies";

document.addEventListener("turbolinks:load", () => {
  if (window.location.href.match('rackets') != null) {
    const selectedRacket = "selected_racket" + "=";
    const comparedRacketsPersistancy = new ComparedRacketCookie(selectedRacket);
    comparedRacketsPersistancy.init(document.querySelectorAll('input.racket-checkbox, input.compared-racket-checkbox'));
  };
});
