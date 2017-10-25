import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Shelves from './Shelves'

class TabsNav extends Component{
    static propTypes = {
    books: PropTypes.array.isRequired,
    transferShelf: PropTypes.func,
    search: PropTypes.bool.isRequired,
    shelf: PropTypes.string.isRequired
  }

    sortShelf = (shelf)=> {
      let shelfBooks
      shelfBooks = this.props.books.filter((book) => book.shelf === (shelf))
      return shelfBooks
  }

  render(){
    const {books, transferShelf, search, shelf } = this.props

    let showBooks
    if (search === false){
      showBooks = this.sortShelf(shelf)
    }else{
      showBooks = books
    }

    return(
      <div>
        <Shelves books={showBooks} transferShelf={transferShelf} shelf={shelf} />
      </div>
    )
  }
}

export default TabsNav
