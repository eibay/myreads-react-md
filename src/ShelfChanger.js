import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component{
  static propTypes = {
    book: PropTypes.object.isRequired,
    transferShelf: PropTypes.func,
    addBook: PropTypes.func,
    clearQuery: PropTypes.func,
    shelf: PropTypes.string
  }

  state = {
    selectValue: "none"
  }

  handleChange = (e) => {
    if (e.target.value){
      let selectedOption = e.target.value
      this.props.transferShelf(this.props.book, selectedOption)
      this.setState( {selectValue: selectedOption} )
    }else{
      this.props.clearQuery
      console.log("ShelfChanger: clearQuery ON!")
    }
  }

  handleAddBook = (e) => {
    this.props.addBook(this.props.book, this.state.selectValue)
  }

  render(){
    return(
      <div>
        <select value={this.props.shelf} onChange={this.handleChange} >
          <option value="none">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
        {(this.props.addBook) ? <button onClick={this.handleAddBook}>Add</button> : null }
      </div>
    )
  }
}

export default ShelfChanger
