import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import update from 'immutability-helper'

import { FontIcon, TextField } from 'react-md'
import * as BooksAPI from './BooksAPI'
import Shelves from './Shelves'
import './search.css'


class Search extends Component {

  static propTypes = {
    transferShelf: PropTypes.func,
    books: PropTypes.array
  }

  state = {
    query: '',
    resultBooks: []
  }

  searchBooks = () => {
    BooksAPI.search(this.state.query, 20).then(books => {
      this.setState({resultBooks: books})
    })
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  filterBooks = (query) => {
      this.updateQuery(query)
      this.searchBooks(query)
      const match = new RegExp(escapeRegExp(query), 'i')
      let filteredBooks = this.state.resultBooks.filter(book => match.test(book.title) || match.test(book.authors))
      this.setState({resultBooks: filteredBooks })
  }

  render() {
    const { shelves, transferShelf, books } = this.props
    const { query, resultBooks } = this.state 
    let showBooks
    if(query){
      showBooks = resultBooks
    }else{
      showBooks = books 
    }

    return(
      <div>
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
            <input className="search-box"
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.filterBooks(event.target.value)}/>
          </div>
        </div>
        <div>  
            <Shelves books={showBooks}
                     transferShelf={transferShelf}/>
        </div>  
      </div>    
    )
  }
}

export default Search