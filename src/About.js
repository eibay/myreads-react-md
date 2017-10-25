import React, { Component } from 'react'
import Slider from 'react-md/lib/Sliders'

export default class About extends Component {
  render() {
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12 md-text-container">
          About 
        </h2>
        <Slider id="page-3-slider" className="md-cell md-cell--12" />
        <h3 className="md-cell md-cell--8 md-text-container">This is the about page...</h3>
      </div>
    )
  }
}
