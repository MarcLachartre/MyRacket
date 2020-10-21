class PopUpBox {
  constructor() {}

  initPopUpBox() {
    const popUpPageContainer = document.createElement("div");
    const popUpBox = document.createElement("div");

    popUpPageContainer.classList.add("pop-up-page-container");
    popUpBox.classList.add("pop-up-box");

    popUpPageContainer.appendChild(popUpBox);
    this.closePopUpBox(popUpBox, popUpPageContainer)
    return popUpPageContainer
  }

  closePopUpBox(popUpBox, popUpPageContainer) {
    const closePopUpBox = document.createElement("i");
    closePopUpBox.classList.add("fas");
    closePopUpBox.classList.add("fa-times");
    closePopUpBox.classList.add("close-button");

    popUpBox.appendChild(closePopUpBox);

    closePopUpBox.addEventListener("click", () => {
      popUpPageContainer.remove()
    });
  }

  successMessage() {
    const successBox = this.initPopUpBox();
    const successMessage1 = document.createElement("div");
    const successMessage2 = document.createElement("div");
    const successMessage3 = document.createElement("div");
    const title = document.createElement("h1");
    const subTitle = document.createElement("h2");
    subTitle.classList.add("pop-up-success-message");

    successMessage1.innerHTML = "Nice!";
    successMessage1.classList.add("success-message");
    successMessage2.innerHTML = "Your review was succesfully posted.";
    successMessage2.classList.add("success-message");
    successMessage3.innerHTML = "Thank you!";
    successMessage3.classList.add("success-message");

    successBox.querySelector(".pop-up-box").appendChild(title);
    successBox.querySelector(".pop-up-box").appendChild(subTitle);
    title.appendChild(successMessage1);
    subTitle.appendChild(successMessage2);
    subTitle.appendChild(successMessage3);
    document.querySelector(".product-page-container").appendChild(successBox);
    successBox.addEventListener("click", ()=>{
      successBox.remove()
    });
  }

  failMessage() {
    const failBox = this.initPopUpBox();
    const failMessage1 = document.createElement("div");
    const failMessage2 = document.createElement("div");
    const failMessage3 = document.createElement("div");
    const title = document.createElement("h1");
    const subTitle = document.createElement("h2");
    subTitle.classList.add("pop-up-fail-message");

    failMessage1.innerHTML = "Ups!";
    failMessage1.classList.add("fail-message");
    failMessage2.innerHTML = "It looks like something went wrong.";
    failMessage2.classList.add("fail-message");
    failMessage3.innerHTML = "Please try again!";
    failMessage3.classList.add("fail-message");

    failBox.querySelector(".pop-up-box").appendChild(title);
    failBox.querySelector(".pop-up-box").appendChild(subTitle);
    title.appendChild(failMessage1);
    subTitle.appendChild(failMessage2);
    subTitle.appendChild(failMessage3);
    document.querySelector(".product-page-container").appendChild(failBox);
    failBox.addEventListener("click", ()=>{
      failBox.remove()
    });
  }
}
