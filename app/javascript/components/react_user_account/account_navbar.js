
import { Link } from 'react-router-dom'; 
import { withRouter } from "react-router"; //importing withRouter allows us to listen to route changes by assigning 3 objects to this.props: history, location, match. To set it up, we need to export default the class component and wrap it in withRouter() see below at the end of file. 

import React from 'react';

class AccountNavbar extends React.Component {
  constructor(props) {
    super(props)
  }

  navbarStyleSelector(pathname) {
    const navbarIcons = document.querySelector(".account-sidebar-container").querySelectorAll("i");
    Array.from(navbarIcons).map(icon => {icon.classList.remove("selected-account-icon")});
    
    if (pathname.match("my_reviews")) {
      document.querySelector(".account-sidebar-container").querySelector(".fa-comment-alt").classList.add("selected-account-icon");
    
    } else if (pathname.match("settings")) {
      document.querySelector(".account-sidebar-container").querySelector(".fa-tools").classList.add("selected-account-icon");

    } else {
      document.querySelector(".account-sidebar-container").querySelector(".fa-user").classList.add("selected-account-icon");
    };
  }

  handleNavigationDisplay() {
    this.props.history.listen((location) => {
      this.navbarStyleSelector(location.pathname); 
    });
  }

  componentDidMount() {
    this.navbarStyleSelector(window.location.pathname)
    this.handleNavigationDisplay();
  }

  render() {
    return (
      
      <div className= "account-sidebar-container"> 
        <div className= "account-sidebar">
        <Link to= {this.props.pathname}>
          <i className="fas fa-user"></i>
        </Link>
        <Link to= {this.props.pathname + "/my_reviews"}> 
          <i className="far fa-comment-alt"></i>
        </Link>
        <Link to= {this.props.pathname + "/settings"}>
          <i className="fas fa-tools"></i>
        </Link>
        </div>
      </div> 
    );
  }
}

export default withRouter(AccountNavbar);