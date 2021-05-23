
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, BrowserHistory, Switch, Link } from 'react-router-dom'

import {Details} from '../components/react_user_account/details'
import {MyReviews} from '../components/react_user_account/my_reviews'
import {AccountSettings} from '../components/react_user_account/account_settings'
import {AccountNavbar} from '../components/react_user_account/account_navbar'

const container = document.querySelector('.user-account-app');
const userData =  JSON.parse(container.dataset.user) ;
const userReviews = JSON.parse(container.dataset.userReviews)


class UserAccountApp extends React.Component {
  constructor(props) {
    super(props);
    
  }
 
  render() {

    const pathname = () => {
      if (window.location.pathname.length > 10) {
        return window.location.pathname.substring(0, 9)
      } else {
        return window.location.pathname
      }
    }

    return(

      <div style= {{position: "relative", minHeight: "calc( 100vh - 110px - 70px )", display: 'flex', width: '100%', justifyContent: 'space-between'}}>
        <AccountNavbar/>
        <Switch>
            <Route path= {pathname()} exact= {true}>
              <Details user= {userData} userReviewsCount= {userReviews.length}/>
            </Route>
            <Route path={pathname() + "/my_reviews"}>
              <MyReviews userReviews= {userReviews}/>
            </Route>
            <Route path= {pathname() + "/settings"}>
              <AccountSettings />
            </Route>
          </Switch>
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
