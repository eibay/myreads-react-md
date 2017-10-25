import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component{
  static propTypes = {
    book: PropTypes.object.isRequired,
    transferShelf: PropTypes.func,
    shelf: PropTypes.string
  }

  handleChange = (e) => {
    this.props.transferShelf(this.props.book, e.target.value)
  }

  render(){
    return(
      <div>
        <select value={this.props.shelf} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
