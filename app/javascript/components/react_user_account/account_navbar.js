
import { Link } from 'react-router-dom'; 

import React from 'react';

export class AccountNavbar extends React.Component {
  constructor(props) {
    super()
    this.pathname = () => {
      if (window.location.pathname.length > 10) {
        return window.location.pathname.substring(0, 9)
      } else {
        return window.location.pathname
      }
    } 
  }


  render() {
    return (
      
      <div className= "account-sidebar-container"> 
        <div className= "account-sidebar">
        <Link to= {this.pathname()}>
          <i className="fas fa-user"></i>
        </Link>
        <Link to= {this.pathname() + "/my_reviews"}> 
          <i className="far fa-comment-alt"></i>
        </Link>
        <Link to= {this.pathname() + "/settings"}>
          <i className="fas fa-tools"></i>
        </Link>
        </div>
      </div> 
    );
  }
}