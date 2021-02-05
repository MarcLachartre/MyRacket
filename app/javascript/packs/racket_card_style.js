import {RacketCardStyleSelector} from '../components/racket_cards/racket_card_style_selector'

document.addEventListener("turbolinks:load", () => {
  if (window.location.href.match('rackets') != null && document.querySelector('.racket-page-container') !== null) {
  const cardStyle = new RacketCardStyleSelector();
  cardStyle.initStyleOnLoad();
  };
});

