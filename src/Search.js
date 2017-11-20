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
    updateBooks: PropTypes.func,
    checkBookOnList: PropTypes.func,
    books: PropTypes.array
  }

  state = {
    query: '',
    resultBooks: []
  }

  searchBooks = (query) => {
    this.updateQuery(query)
    BooksAPI.search(this.state.query, 20).then(newBooks => {
        this.setState({resultBooks : newBooks})
        let newResultBooks = (this.state.resultBooks).filter(book => !((this.props.books.some)(b => b.id === book.id)))
        this.setState({resultBooks: newResultBooks})
    })
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  clearResultBooks = () => {
    this.setState({resultBooks: []})
  }

  filterBooks = (query) => {
      const match = new RegExp(escapeRegExp(query), 'i')
      const filteredBooks = this.state.resultBooks.filter(book => match.test(book.title))
      this.setState({resultBooks: filteredBooks })
  }

  addBook = (book, shelf) => {
    const modifiedBook = update(book, {shelf: {$set: (book.shelf = shelf)}} )
    this.props.updateBooks(modifiedBook)
    BooksAPI.update(modifiedBook, shelf)
  }

  render() {
    const { transferShelf, books } = this.props
    const { query, resultBooks } = this.state

    return(
      <div>
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
            <input className="search-box"
              type="text"
              placeholder="Search by title"
              value={query}
              onChange={event => this.searchBooks(event.target.value)} />
          </div>
        </div>
        <div>  
            <Shelves books={resultBooks}
                     addBook={this.addBook}
                     clearQuery={this.clearQuery}
                     transferShelf={transferShelf}/>
        </div>  
      </div>    
    )
  }
}

export default Search