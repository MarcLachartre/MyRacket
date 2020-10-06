class CreateReviewDisplay {
  constructor(comment) {
    this.comment = comment
  }

  init() {
    this.createDisplay();
  }

  createDisplay() {
    console.log(this.comment)
    const commentBox = document.createElement("div");
    commentBox.innerHTML = this.comment;
    document.querySelector('.reviews-list').appendChild(commentBox)
  }
}
