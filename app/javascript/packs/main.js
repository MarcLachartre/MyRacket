import {Comparator} from '../components/comparator_manager/comparator_file_manager';
import {ComparedRacketCookie} from "../components/cookies_manager/compared_racket_cookies";
import {RacketCardStyleSelector} from '../components/racket_cards/racket_card_style_selector'
import {RacketReviews} from "../components/reviews/racket_reviews"
import {Searchbar} from '../components/search_function/search_function_file_manager';
import {AppVisualEffects} from '../components/effects/app_visual_effects';

// import {ElementReveal} from '../components/effects/element_reveal';
// import ScrollReveal from 'scrollreveal';
// console.log(module.loaded)
export class Main {
  constructor() {}

  init() {
    if (window.location.href.match('/rackets') != null && document.querySelector('.racket-page-container') !== null) {
      this.comparatorInit();
      this.comparedRacketCookieInit();
      this.racketCardStyleSelectorInit();
      this.searchbarInit();
      this.pageVisualEffectInit().initRacketsIndexVE()

    } else if (window.location.href.match('/rackets/') != null ) {
      this.racketReviewsInit();
      this.pageVisualEffectInit().initRacketShowVE();

    } else if (window.location.href.match('pages/home') != null || window.location.href === (window.location.origin + "/")) {
      this.homepageInit();  
      };
  }

  pageVisualEffectInit() {
    const appVisualEffects = new AppVisualEffects()
    return appVisualEffects
  }

  comparatorInit() {
    const comparator = new Comparator();
    comparator.initOnLoad();
  }

  comparedRacketCookieInit() {
    const selectedRacket = "selected_racket" + "=";
    const comparedRacketsPersistancy = new ComparedRacketCookie(selectedRacket);
    comparedRacketsPersistancy.init(document.querySelectorAll('input.racket-checkbox, input.compared-racket-checkbox'));
  }

  racketCardStyleSelectorInit() {
    const cardStyle = new RacketCardStyleSelector();
    cardStyle.initStyleOnLoad();  
  }

  searchbarInit() {
    const searchbar = new Searchbar();
    searchbar.init();
  }

  racketReviewsInit() {      
    const racketReviews = new RacketReviews();
    racketReviews.init();
  }

  homepageInit() {
    import('../components/homepage/homepage_tennis_court').then((homepage) => {
      new homepage.HomepageTennisCourt().init();
    });
  }
}









// console.log("Search Function")


 

// document.addEventListener('turbolinks:load', () => {
// const elementReveal = new ElementReveal();

//   if (window.location.href.match('rackets/') != null && document.querySelector('.product-page-container') !== null) {
//     const revealOptions = [['.product-spec-container', "slide left"], ['.product-image', "slide right"], ['.show-product-description', "slide up"], ['.review-section-titles', "slide up"], ['.create_review_form', "slide up"], ['.review-card', "slide up"]];

//     revealOptions.forEach((option) => {
//       if (document.querySelectorAll(option[0]).length > 1) { //if elements to reveal are contained in an array
//         document.querySelectorAll(option[0]).forEach((element) => {
//         if (elementReveal.hasToBeRevealed(`${element.id}`, "id") === true) {
//           elementReveal.reveal(element, option[1]);
//           };
//         });
//       } else if (elementReveal.hasToBeRevealed(option[0], "class") === true) {
//         elementReveal.reveal(option[0], option[1]);
//       };
//     });

//   } else if (window.location.href.match('rackets') != null && document.querySelector('.racket-container') !== null) {
//     document.querySelectorAll('.racket-card').forEach((racket, i) => {
//       racket.style.animation = `${i/30}s linear 0s stayWhite, 0.20s ease-in-out ${i/30}s slideIn`;
//     });
//   };
// });


// // animation: slideIn 1s 0.6s;


// // document.addEventListener('turbolinks:load', () => {
// //   const elementReveal = new ElementReveal();
// //   const revealOptions = [['.product-spec-container', "slide left"], ['.product-image', "slide right"], ['.show-product-description', "slide up"], ['.review-section-titles', "slide up"], ['.create_review_form', "slide up"], ['.review-card', "slide up"]]

// //   revealOptions.forEach((option) => {
// //     if (document.querySelectorAll(option[0]).length > 1) { //if elements to reveal are contained in an array
// //       document.querySelectorAll(option[0]).forEach((element) => {
// //       if (elementReveal.hasToBeRevealed(`${element.id}`, "id") === true) {
// //           elementReveal.reveal(element, option[1])
// //         }
// //       })
// //     } else if (elementReveal.hasToBeRevealed(option[0], "class") === true) {
// //       elementReveal.reveal(option[0], option[1]);
// //     };
// //   });
// // });
