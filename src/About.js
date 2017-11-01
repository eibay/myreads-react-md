import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12 md-text-container">About: MyReeds</h2>
        <p> 
          <h4> An application that allows user to organize books based on reading activity. 
          There are 3 status or shelves where each book can be 
          placed namely: "Currently Reading", "Want To Read", "Read". 
          There's also a search capability that dynamically filter books 
          by matching query with status, title or author.</h4>

          <h5> To Use </h5>
          <ul>
            <li> clone this repo</li>
            <li> run "npm install" on terminal to install dependencies </li>
            <li> run "npm start" </li>
          </ul>
          
          <h5> Technology </h5>
            <li> :Using create-react-app: ReactJS, React-md, React Router 4 </li>

          <h5> License / Credits </h5>
            <li> Udacity React Nano Degree </li>
            <li> create-react-app </li>
            <li> react-md-with-router4 example </li>
        </p>
      </div>
    )
  }
}
