import React from 'react'
import {date_format} from '../helpers/string_methods'
import {RacketReviews} from '../reviews/racket_reviews'

export class MyReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  racketLink(racketId) {
    const link = String(window.origin) + "/rackets/" + String(racketId)
    return link
  }

  editReviewLink(racketId, reviewId) {
    const editLink = window.origin + "/rackets/" + racketId + "/racketreviews/" + reviewId + "/edit";
    return editLink
  }

  deleteReview() {
    const deleteBtn = document.querySelector(".user-account-page-container").querySelectorAll(".delete-review").forEach(deleteReviewBtn => {
      new RacketReviews().deleteReview(deleteReviewBtn);
    });
  }

  editReview() {
    document.querySelector(".user-account-page-container").querySelectorAll(".user-edit-review").forEach(editLink => {
      const pageContainer = document.querySelector(".user-account-page-container");
      new RacketReviews().editReview(editLink, pageContainer);
    });
  }

  reviewsEmpty() {
    if (this.props.userReviews.length == 0) {
      console.log("cul")
    } else {
      console.log("chatte")
    }
  }

  componentDidMount() {
    this.deleteReview();
    this.editReview();
  } 

  render() {
    if (this.props.userReviews.length == 0) {
      return (
        <div className= "account-reviews-container" >
          <h1> My reviews </h1>
          <div className= 'reviews-list'>
            <div className= "no-reviews-message">You haven't written any review so far. Reviews you will write on rackets will be displayed here. You will also be able to edit or delete them from this interface.</div> 
          </div>
        </div>
      );
    } else {
      return (
        <div className= "account-reviews-container" >
          <h1> My reviews </h1>
          <div className= 'reviews-list'>
            {this.props.userReviews.map((review) => 
              <div className= 'review-card' key= {review.id}> 
                <div className= 'racketreview-details' >
                  <h5>{review.racket_brand}</h5> 
                  <h5>{review.racket_model}</h5> 
                  <h6>{date_format(review.created_at)}</h6> 
                  <a href= {this.racketLink(review.racket_id)}>See racket</a>
                  <a className="user-edit-review" href={this.editReviewLink(review.racket_id, review.id)}>Edit Review</a>
                </div>
                <div className= "review-text-and-delete">
                  <div className= "review-text">
                    <div>{review.comment}</div> 
                  </div>
                  <i className= "fas fa-times delete-review button-up" >
                    <input type="hidden" name="delete" id="delete" value="" data-racketreview= {review.id}></input>
                  </i>
                </div>  
              </div>
              )
            } 
          </div>
        </div>
      );
    }  
  }
}

