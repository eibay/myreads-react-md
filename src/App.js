import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Navigation from './Navigation'
import Listings from './Listings'
import TabsNav from './TabsNav'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    this.fetchBooks()
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })

  }

  render() {
  const {books} = this.state 
    return (
      <div>
        <Navigation books={books}>
        </Navigation>
      </div>
    )
  }
}

export default App
