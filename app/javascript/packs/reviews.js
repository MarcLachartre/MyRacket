import {RacketReviews} from "../components/reviews/racket_reviews"

document.addEventListener("turbolinks:load", () => {
  const racketReviews = new RacketReviews();
  racketReviews.init();
})

