import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'

import { FontIcon, TextField } from 'react-md'
import * as BooksAPI from './BooksAPI'
import Shelves from './Shelves'
import './search.css'


class Search extends Component {

  static propTypes = {
    transferShelf: PropTypes.func
  }

  state = {
    query: '',
    books: [],
    defaultBooks: []
  }

  componentDidMount(){
    this.defaultBooks()
  }

  defaultBooks = () => {
    BooksAPI.search("React", 20).then(books => {
      this.setState({defaultBooks: books})
    })
  }

  searchBooks = () => {
    BooksAPI.search(this.state.query, 20).then(books => {
      this.setState({books})
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
      let filteredBooks = this.state.books.filter(book => match.test(book.title) || match.test(book.authors))
      this.setState({books: filteredBooks })
  }

  render() {
    const { shelves, transferShelf } = this.props
    const { query, books, defaultBooks } = this.state 
    let showBooks
    if(query){
      showBooks = books
    }else{
      showBooks = defaultBooks
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
                     transferShelf={transferShelf} />
        </div>  
      </div>    
    )
  }
}

export default Search