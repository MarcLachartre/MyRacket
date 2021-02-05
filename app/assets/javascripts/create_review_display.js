// class CreateReviewDisplay extends PopUpBox {
//   constructor(comment, reviewId, username, url, createdAt) {
//     super();
//     this.comment = comment;
//     this.reviewId = reviewId;
//     this.username = username;
//     this.url = url;
//     this.createdAt = createdAt;
//   }

//   init() {
//     return this.createDisplay();
//     const sr = ScrollReveal();
//     sr.reveal(".product-spec")
//   }

//   createDisplay() {
//     const reviewCard = document.createElement("div");
//     reviewCard.classList.add("review-card");
//     this.addUserDetails(reviewCard);
//     this.addCommentBox(reviewCard);

//     document.querySelector('.reviews-list').insertBefore(reviewCard, document.querySelector(".review-card"));

//     return reviewCard
//   }

//   addUserDetails(reviewCard) {
//     const reviewUserDetail = document.createElement("div");
//     const profilePic = document.createElement("i");
//     const userName = document.createElement("h5");
//     const editReviewLink = document.createElement("a");
//     const createdAt = document.createElement("h7");

//     reviewUserDetail.classList.add("review-user-detail");
//     profilePic.classList.add("fas");
//     profilePic.classList.add("fa-grin-alt");
//     userName.classList.add("user-name-review");
//     userName.innerHTML = this.username.charAt(0).toUpperCase() + this.username.slice(1)
//     editReviewLink.classList.add("user-edit-review");
//     editReviewLink.innerHTML = "Edit Review";
//     editReviewLink.href = `${this.url}` + `${this.reviewId}` + "/edit";
//     createdAt.classList.add("review-date");
//     createdAt.innerHTML = this.createdAt.slice(0,10).replace(/-/g, "/");

//     reviewCard.appendChild(reviewUserDetail);
//     reviewUserDetail.appendChild(profilePic);
//     reviewUserDetail.appendChild(userName);
//     reviewUserDetail.appendChild(editReviewLink);
//     reviewUserDetail.appendChild(createdAt);
//   }

//   addCommentBox(reviewCard) {
//     const reviewTextAndDelete = document.createElement("div");
//     const reviewText = document.createElement("div");
//     const deleteButton = document.createElement("i");
//     const deleteHiddenInput = document.createElement("input");

//     reviewTextAndDelete.classList.add("review-text-and-delete");
//     reviewText.classList.add("review-text");
//     reviewText.innerHTML = this.comment;
//     deleteButton.classList.add("fas");
//     deleteButton.classList.add("fa-times");
//     deleteButton.classList.add("delete-review");
//     deleteButton.classList.add("button-up");
//     deleteHiddenInput.type = "hidden";
//     deleteHiddenInput.name = "delete";
//     deleteHiddenInput.id = "delete";
//     deleteHiddenInput.dataset.racketreview = this.reviewId;

//     reviewCard.appendChild(reviewTextAndDelete);
//     reviewTextAndDelete.appendChild(reviewText);
//     reviewTextAndDelete.appendChild(deleteButton);
//     deleteButton.appendChild(deleteHiddenInput);
//   }

// }

