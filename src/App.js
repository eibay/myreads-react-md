import React, { Component } from 'react'
import update from 'immutability-helper'
import * as BooksAPI from './BooksAPI'
import Navigation from './Navigation'

import './App.css'

class App extends Component {
  state = {
    books: [],
    listTitles: ["MyReads", "MySearch"],
    shelves: [{slug: "currentlyReading", title: "Currently Reading", search: false},
              {slug: "wantToRead", title: "Want To Read", search: false},
              {slug: "read", title: "Read", search: false}]    
  }

  componentDidMount(){
    this.fetchBooks()
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })

  }

  transferShelf = (book, shelf) => {
    const myBooks = this.state.books
    const modifiedBook = update(book, {shelf: {$set: (book.shelf = shelf)}} )
    const books = update(myBooks, {$apply: function(){return modifiedBook }})
    this.setState(state => {books})
    BooksAPI.update(modifiedBook, shelf)
  }

  render() {
  const {books, shelves} = this.state 
    return (
      <div>
        <Navigation 
          books={books}
          transferShelf={this.transferShelf}
          shelves={shelves}/>
      </div>
    )
  }
}

export default App
