
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { BrowserHistory } from 'react-router'

import {Details} from '../components/react_user_account/details'
import {MyReviews} from '../components/react_user_account/my_reviews'
import {AccountSettings} from '../components/react_user_account/account_settings'
import AccountNavbar from '../components/react_user_account/account_navbar'
import {FetchDatabase} from '../components/fetch_database/fetch_database'

const container = document.querySelector('.user-account-app');
// const userData =  JSON.parse(container.dataset.user) ;
const userReviews = JSON.parse(container.dataset.userReviews)


class UserAccountApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAccountModification = this.handleAccountModification.bind(this);
    this.csfrToken = this.csfrToken.bind(this)
    this.state = {user: JSON.parse(document.querySelector('.user-account-app').dataset.user)}
    
  }
  
  csfrToken() {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    return csrf
  }

  errorsAlert(errors) {
    if (Object.entries(errors).length >= 1) {
      alert("Something went wrong:" + String(Object.entries(errors).map(error => ` ${error[0].replace("_", " ")} ${error[1]}`)).toLowerCase() + ".");
    }
  }

  displayFormErrors(errors) {
    document.querySelectorAll(".field input").forEach(input => {
      const inputName = input.name.substring(5).slice(0,-1)
      if (Object.keys(errors).includes(inputName)) {
        input.parentElement.style.color = "red";
      } else {
        input.parentElement.style.color = "black"
      };
    });
    this.errorsAlert(errors)
  }

  resetFormDisplay() {
    document.querySelectorAll(".field input").forEach(input => {
      input.parentElement.style.color = "black";
      if (input.type === "password") {
        input.value = ""
      };
    });
  }

  handlePasswordInput() {
    document.querySelectorAll(".field input[type=password]").forEach(input => {
      input.addEventListener("keydown", (event)=> {
        if (event.which === 32) {
          event.preventDefault();
        }
      })
      input.addEventListener("paste", (event)=> {
        event.preventDefault();
        alert("You can't copy/paste in this input");
      })
    })
  }

  handleAccountModification() {
    document.querySelector(".user-edit-restration").addEventListener("click", (e) => {
      e.preventDefault();
      const url = new URL(window.location.origin + "/users");
      const body = JSON.stringify({authenticity_token: this.csfrToken(),
                                  utf8: document.querySelector(".utf8").value,
                                  user: {
                                    name: document.querySelector("#user_name").value, 
                                    lastname: document.querySelector("#user_lastname").value,
                                    username: document.querySelector("#user_username").value, 
                                    password: document.querySelector("#user_password").value, 
                                    password_confirmation: document.querySelector("#user_password_confirmation").value, 
                                    current_password: document.querySelector("#user_current_password").value,
                                    },
                                    commit: "Update"
                                  });

      const editRegistration = new FetchDatabase();
      editRegistration.patch(url, body).then(response => {
        return response.json()
      }).then(response => {
        console.log(response)
        if (response.errors !== undefined) {
          if (Object.keys(response.errors).length !== 0 ) {
            this.displayFormErrors(response.errors);
          }
        } else {
          alert("Account succesfully modified!")
          this.setState({
            user: response.resource
          });
          this.resetFormDisplay();
        };
      });
    });
  }

  componentDidMount() {
    this.handlePasswordInput()
  }

  render() {
    const userData = this.state.user
    const pathname = "/users/" + String(userData.id);
    return(
      <div className="react-user-account-container" style= {{position: "relative", minHeight: "calc( 100vh - 110px - 70px )", display: 'flex', width: '100%', justifyContent: 'space-between'}}>
        <AccountNavbar pathname= {pathname}/>
        {/* <Switch> */}
            <Route path= {pathname} exact= {true}>
              <Details user= {userData} userReviewsCount= {userReviews.length}/>
            </Route>
            <Route path= {pathname + "/my_reviews"}>
              <MyReviews userReviews= {userReviews}/>
            </Route>
            <Route path= {pathname + "/settings"}>
              <AccountSettings user= {userData} handleAccountModification={this.handleAccountModification} csfrToken= {this.csfrToken()}/>
            </Route>
          {/* </Switch> */}
      </div>
    )
  }
}


ReactDOM.render(
  <Router history={BrowserHistory}>
    <UserAccountApp />
  </Router>
  ,
  container
);




  
// ReactDOM.render(<MyReviews/>, container);
