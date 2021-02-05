// class EditReviewFormDisplay extends PopUpBox {
//   constructor(comment) {
//     super();
//     this.comment = comment;
//   }

//   init() {
//     const popUpBox = super.initPopUpBox();
//     document.querySelector(".product-page-container").appendChild(popUpBox);
//     const form = this.editFormContent();
//     popUpBox.children[0].appendChild(form)
//   }

//   editFormContent() {
//     const editForm = document.createElement("form");
//     const title = document.createElement("h2");
//     const label = document.createElement("label");
//     const editTextSubmitBtn = document.createElement("div");
//     const textArea = document.createElement("textarea");
//     const submitBtn = document.createElement("input");

//     editForm.classList.add("edit-review-form");
//     editForm.appendChild(title);

//     label.classList.add("edit-review-label");
//     label.innerHTML = "Modify your comment below";
//     title.appendChild(label);

//     editTextSubmitBtn.classList.add("edit-text-and-submit-btn");
//     editForm.appendChild(editTextSubmitBtn);

//     textArea.classList.add("edit-review-text-field");
//     textArea.name = "racketreview[comment]";
//     textArea.id = "edit-review-textbox";
//     textArea.cols = "40";
//     textArea.rows = "4";
//     textArea.maxLength = "700";
//     textArea.value = this.comment;
//     editTextSubmitBtn.appendChild(textArea);

//     submitBtn.name = "commit";
//     submitBtn.value = "Edit your comment";
//     submitBtn.classList.add("button-up");
//     submitBtn.classList.add("submit-pop-up-form");
//     submitBtn.type = "submit";
//     editTextSubmitBtn.appendChild(submitBtn);

//     return editForm
//   }
// }
