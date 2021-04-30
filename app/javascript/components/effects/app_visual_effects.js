import {ElementReveal} from './element_reveal';
import ScrollReveal from 'scrollreveal';

export class AppVisualEffects {
  constructor() {}
  
  initRacketsIndexVE() {
    document.querySelectorAll('.racket-card').forEach((racket, i) => {
      racket.style.animation = `${i/30}s linear 0s stayWhite, 0.20s ease-in-out ${i/30}s slideIn`;
    });
  }

  initRacketShowVE() {
    const revealOptions = [['.product-spec-container', "slide left"], ['.product-image', "slide right"], ['.show-product-description', "slide up"], ['.review-section-titles', "slide up"], ['.create_review_form', "slide up"], ['.review-card', "slide up"]];
    const elementReveal = new ElementReveal();
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
  }
}