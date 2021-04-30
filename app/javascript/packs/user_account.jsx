import React from 'react'
import ReactDOM from 'react-dom'
import Details from '../components/account/details'
import {MyReviews} from '../components/account/my_reviews'

const container = document.querySelector('.user-account-app');
const initialUser =  JSON.parse(container.dataset.user) ;
const userReviews = JSON.parse(container.dataset.userReviews)
// const userReviewedRackets = JSON.parse(container.dataset.userReviewedRackets)
// console.log(userReviewedRackets)

ReactDOM.render(
  <div style= {{width: '100%', display: 'flex', flexDirection: "column", alignItems: 'center'}}>
    <Details user= {initialUser} userReviewsCount= {userReviews.length}/>
    <MyReviews userReviews= {userReviews}/>
  </div>, 
  container);




  
// ReactDOM.render(<MyReviews/>, container);
