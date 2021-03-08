import ScrollReveal from "scrollreveal";

export class ElementReveal {
  constructor(slideLeft, slideRight, slideUp) {
    this.slideLeft = {
      distance: "400px",
      duration: 800,
      easing: "cubic-bezier(.55,0,.5,.99)",
      opacity: 0,
      origin: "right",
    };
    this.slideRight = {
      distance: "400px",
      duration: 800,
      easing: "cubic-bezier(.55,0,.5,.99)",
      opacity: 0,
      origin: "left",
    };
    this.slideUp = {
      distance: "300px",
      duration: 600,
      easing: "cubic-bezier(.55,0,.5,.99)",
      opacity: 0,
      origin: "bottom",
    };
    this.fadeIn = {};
  }

  hasToBeRevealed(selector, selectorType) {
    if (
      selectorType === "id" &&
      document.getElementById(selector).getBoundingClientRect().y <= 0
    ) {
      return false;
    } else if (
      selectorType === "class" &&
      document.querySelector(String(selector)).getBoundingClientRect().y <= 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  reveal(selector, revealType) {
    const sr = new ScrollReveal();
    // if (revealType === "fadeOut") {

    // } else
    if (revealType === "fadeIn") {
      console.log("fadein");
      sr.reveal(selector, this.fadeIn);
    } else if (revealType === "slide left") {
      sr.reveal(selector, this.slideLeft);
    } else if (revealType === "slide right") {
      sr.reveal(selector, this.slideRight);
    } else if (revealType === "slide up") {
      sr.reveal(selector, this.slideUp);
    } else {
      return;
    }
  }

  listReveal(elementsArray, scrollRevealEffect, elementRevealDelay) {
    //elementsArray is the list of items to reveal on page, scrollRevealEffect is the type of effect you want (see ScrollReaveal API, defaults), elementRevealDelay is the delay you want to apply between each element reveal.
    const sr = new ScrollReveal();

    const visibleElements = [];
    const elementsAbove = [];
    const elementsBelow = [];

    for (let i = 0; i <= elementsArray.length - 1; i++) {
      // I want to know if element is on the screen, if yes apply style to it.
      // elementsArray[i].style.opacity = "1"

      const elementHeight = elementsArray[i].offsetHeight;
      const elementPositionInWindow = elementsArray[i].getBoundingClientRect().y;

      const elementPositionInContainer =
        elementsArray[i].getBoundingClientRect().y -
        document.querySelector(".myracket-navbar").offsetHeight;

      if (elementPositionInContainer < -elementHeight) {
        // this condition retrieves hidden elements above the user position on the container
        elementsAbove.push(elementsArray[i]);
        // console.log(`is above the in container`)
      } else if (elementPositionInWindow > window.innerHeight) {
        // this condition retrieves hidden elements below the user position on the container
        elementsBelow.push(elementsArray[i]);
        // console.log("is below the container")
      } else {
        // this condition retrieves the elements visible on the screen
        visibleElements.push(elementsArray[i]);
        // console.log("is in the container")
      }
    }

    for (let i = 0; i < visibleElements.length; i++) {
      scrollRevealEffect.delay = i * elementRevealDelay;
      sr.reveal(visibleElements[i], scrollRevealEffect);
    }

    const size = 4;
    const elementsArraysBelow = [];
    for (let i = 0; i < elementsBelow.length; i += size) {
      elementsArraysBelow.push(elementsBelow.slice(i, i + size));
    }

    elementsArraysBelow.forEach((elArrays) => {
      for (let i = 0; i < 4; i++) {
        scrollRevealEffect.delay = i * elementRevealDelay;
        sr.reveal(elArrays[i], scrollRevealEffect);
      }
    });
  }

  isOnScreen(elementsArray) {
    const visibleElements = [];
    for (let i = 0; i <= elementsArray.length - 1; i++) {
      // I want to know if element is on the screen, if yes apply style to it.
      // elementsArray[i].style.opacity = "1"
      const elementHeight = elementsArray[i].offsetHeight;
      const elementPositionInWindow = elementsArray[i].getBoundingClientRect().y;
      const elementPositionInContainer =
        elementsArray[i].getBoundingClientRect().y -
        document.querySelector(".myracket-navbar").offsetHeight;

      if (
        elementPositionInWindow < window.innerHeight &&
        elementPositionInContainer > -elementHeight
      ) {
        // this condition retrieves hidden elements below the user position on the container
        visibleElements.push(elementsArray[i]);
      }
    }
    return visibleElements;
  }
}
