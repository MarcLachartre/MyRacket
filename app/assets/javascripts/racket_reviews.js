class RacketReviews extends FetchDatabase{
  constructor() {
    super()
  }

  init() {
    document.querySelectorAll(".delete-review").forEach(deleteReviewBtn => {
      this.deleteReview(deleteReviewBtn);
    });
    this.createReview();
    document.querySelectorAll(".user-edit-review").forEach((editLink) => {
      this.editReview(editLink);
    });
  }

  deleteReview(deleteReviewBtn) {
    deleteReviewBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const confirmation = window.confirm("Are you sure you want to delete your comment?");
      console.log(deleteReviewBtn.querySelector("#delete").dataset.racketreview)
      if (confirmation === true ) {
        deleteReviewBtn.closest(".review-card").style.display = "none";
        const url = new URL(`${window.location.href}/racketreviews/${deleteReviewBtn.querySelector("#delete").dataset.racketreview}`);
        super.destroy(url);
      };
    });
  }

  createReview() {
    if (document.querySelector(".create-review-fields") != null) {
      document.querySelector(".create-review-fields").querySelector('input[type="submit"]').addEventListener("click", () => {
        event.preventDefault();
        const url = new URL(`${window.location.href}/racketreviews/`);
        console.log(url)
        const com = {comment: document.querySelector("#racketreview_comment").value};
        const body = JSON.stringify({racketreview: com});

        if (com.comment.length === 0) {
          return
        }

        const newReview = super.create(url, body);
        newReview.then(response => {
          this.fetchSuccess(response);

          return response.json()
        }).then(response => {
          const newReviewDisplay = new CreateReviewDisplay(response.racketreview.comment, response.racketreview.id, response.current_user.name, url.href, response.racketreview.created_at);
          const reviewCard = newReviewDisplay.init();
          this.deleteReview(reviewCard.querySelector(".fa-times"));
          this.editReview(reviewCard.querySelector(".user-edit-review"));
          document.querySelector("#racketreview_comment").value = "";
          return response
        });

      });
    };
  }

  editReview(editLink) {
    editLink.addEventListener("click", (event) => {
      event.preventDefault();
      const url = new URL(event.srcElement.href);
      const getEditReview = super.get(url);

      getEditReview.then(response => {
        const showEditReviewForm = new EditReviewFormDisplay(response.racketreview.comment);
        showEditReviewForm.init();

      }).then(response => {
        document.querySelector(".submit-pop-up-form").addEventListener("click", (e) => {
          e.preventDefault();
        const body = JSON.stringify({ comment: document.querySelector(".edit-review-text-field").value});

        const patchReview = super.patch(url, body).then(response => {
        document.querySelector(".pop-up-page-container").remove();

        this.fetchSuccess(response);
            return response.json()
          }).then(response => {
            event.srcElement.parentElement.parentElement.querySelector(".review-text").innerHTML = response.racketreview.comment;
          });
        });
      });
    });
  }

  fetchSuccess(response) {
          if (response.statusText === "OK") {
            const successPopUpBox = new PopUpBox();
            successPopUpBox.initPopUpBox();
            successPopUpBox.successMessage();
          } else {
            const failPopUpBox = new PopUpBox();
            failPopUpBox.initPopUpBox();
            failPopUpBox.failMessage();
            };
  }
}
