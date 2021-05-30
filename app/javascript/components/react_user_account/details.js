import React from "react"
import {capitalize, date_format} from "../helpers/string_methods"

export class Details extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      
        <div className= "account-details-container">
          <h1> Welcome to your account {this.props.user.username} </h1>
          <div className= "user-details"> 
            <i className= "fas fa-grin-alt"></i>
            <h5>
              { capitalize(this.props.user.name) + " " + capitalize(this.props.user.lastname)} {/* helpers  "../helpers/string_methods" */}
            </h5>
            <h5>
              { this.props.user.email }
            </h5>
            <div>
              Member since {date_format(this.props.user.created_at)} {/* helpers  "../helpers/string_methods" */}
            </div>
          </div>
          <div className= "reviews-count-container">
            <div className= "reviews-count">
              <h4>
                Reviews 
              </h4>
              <div>
                {this.props.userReviewsCount}
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

