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

  checkBookOnList = (currentSetBooks, modifiedBook) => {
    const currentBooksTitles = []
    currentSetBooks.map(book => {
      currentBooksTitles.push(book.title)
    })
    let checkBook = currentBooksTitles.includes(modifiedBook.title)
    return checkBook
  }

  updateBooks = (modifiedBook) => {
    let currentSetBooks = this.state.books
    let newSetBooks

    if (this.checkBookOnList(currentSetBooks, modifiedBook)){
      alert(`This book already exist in your shelf.`)
    }else {
      newSetBooks = currentSetBooks.push(modifiedBook)
      this.setState(state => {books: newSetBooks})
      alert(`Success: Book is now added and can be found at ${modifiedBook.shelf} shelf.`)
      BooksAPI.update(modifiedBook, modifiedBook.shelf)
    }

  }

  transferShelf = (book, shelf) => {
    const myBooks = this.state.books
    const modifiedBook = update(book, {shelf: {$set: (book.shelf = shelf)}} )
    this.setState(state => {books: modifiedBook })
    BooksAPI.update(modifiedBook, shelf)
  }

  render() {
  const {books, shelves} = this.state 
    return (
      <div>
        <Navigation 
          books={books}
          transferShelf={this.transferShelf}
          updateBooks={this.updateBooks}
          shelves={shelves}/>
      </div>
    )
  }
}

export default App
