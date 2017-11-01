import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import { FontIcon, TextField } from 'react-md'

import Shelves from './Shelves'
import './search.css'


export default class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array,
    transferShelf: PropTypes.func
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render() {
    const { books, shelves, transferShelf } = this.props
    const { query } = this.state 

    let filteredBooks
    if(query){
      const match = new RegExp(escapeRegExp(query), 'i')
      filteredBooks = books.filter((book) => match.test(book.title) || match.test(book.authors))
    }else {
      filteredBooks = books
    }
    return(
      <div>
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
            <input className="search-box"
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div>  
            <Shelves books={filteredBooks}
                     transferShelf={transferShelf} />
        </div>  
      </div>    
    )
  }
}