// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

// document.addEventListener('turbolinks:load', () => {
//   console.log(document.querySelector('.user-name-review'))
//   document.querySelector('.user-name-review').addEventListener("click", ()=> {
//     ReactDOM.render(
//     <Hello name="React" />,
//     document.querySelector('.footer').appendChild(document.createElement('div')),
//   )
//   })
//   ReactDOM.render(
//     <App/>,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
