import React from 'react'
import {date_format} from '../helpers/string_methods'

export class MyReviews extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.userReviews)
  }
  render() {
    return (
      
        <div className= "account-reviews-container" >
          <h2> My last reviews </h2>
          <div className= 'reviews-list'>
            {this.props.userReviews.map((review) => 
              <div className= 'review-card' key= {review.id}> 
                <div className= 'racketreview-details' >
                  <div>{review.racket_brand}</div> 
                  <div>{review.racket_model}</div> 
                  <div>{date_format(review.created_at)}</div> 
                  {console.log(window.location)}
                  <a href="https://www.mozilla.com/">See racket</a>
                </div>
                <div className= "review-text-and-delete">
                  <div className= "review-text">
                    <div>{review.comment}</div> 
                  </div>
                </div>  
              </div>
              )
            } 
          </div>
        </div>
      
    );
  }
}

