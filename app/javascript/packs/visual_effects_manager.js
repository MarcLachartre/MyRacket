import {ElementReveal} from '../components/effects/element_reveal';
import ScrollReveal from 'scrollreveal';

document.addEventListener('turbolinks:load', () => {
  const elementReveal = new ElementReveal();

  if (window.location.href.match('rackets/') != null && document.querySelector('.product-page-container') !== null) {
    const revealOptions = [['.product-spec-container', "slide left"], ['.product-image', "slide right"], ['.show-product-description', "slide up"], ['.review-section-titles', "slide up"], ['.create_review_form', "slide up"], ['.review-card', "slide up"]];

    revealOptions.forEach((option) => {
      if (document.querySelectorAll(option[0]).length > 1) { //if elements to reveal are contained in an array
        document.querySelectorAll(option[0]).forEach((element) => {
        if (elementReveal.hasToBeRevealed(`${element.id}`, "id") === true) {
          elementReveal.reveal(element, option[1]);
          };
        });
      } else if (elementReveal.hasToBeRevealed(option[0], "class") === true) {
        elementReveal.reveal(option[0], option[1]);
      };
    });

  } else if (window.location.href.match('rackets') != null && document.querySelector('.racket-container') !== null) {

  //   const revealEffect = {distance: '150px', duration: 400, easing: 'cubic-bezier(.55,0,.5,.99)', origin: 'bottom'};
  //   elementReveal.listReveal(document.querySelectorAll('.racket-card'), revealEffect, 50);
  };
});





// document.addEventListener('turbolinks:load', () => {
//   const elementReveal = new ElementReveal();
//   const revealOptions = [['.product-spec-container', "slide left"], ['.product-image', "slide right"], ['.show-product-description', "slide up"], ['.review-section-titles', "slide up"], ['.create_review_form', "slide up"], ['.review-card', "slide up"]]

//   revealOptions.forEach((option) => {
//     if (document.querySelectorAll(option[0]).length > 1) { //if elements to reveal are contained in an array
//       document.querySelectorAll(option[0]).forEach((element) => {
//       if (elementReveal.hasToBeRevealed(`${element.id}`, "id") === true) {
//           elementReveal.reveal(element, option[1])
//         }
//       })
//     } else if (elementReveal.hasToBeRevealed(option[0], "class") === true) {
//       elementReveal.reveal(option[0], option[1]);
//     };
//   });
// });
