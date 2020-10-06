class RacketReviews extends FetchDatabase{
  constructor() {
    super()
  }

  init() {
    this.deleteReview();
    this.createReview();
  }

  deleteReview() {
    document.querySelectorAll(".delete_review").forEach(deleteReviewBtn => {
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
    });
  }

  createReview() {
    document.querySelector(".create-review-fields").querySelector('input[type="submit"]').addEventListener("click", () => {
      event.preventDefault();
      const url = new URL(`${window.location.href}/racketreviews/`);
      const com = {comment: document.querySelector("#racketreview_comment").value};
      const body = JSON.stringify({racketreview: com});
      const newReview = super.create(url, body);
      newReview.then(response => {
        const newReviewDisplay = new CreateReviewDisplay(response);
        newReviewDisplay.init()
      })
    });
  }
}
