import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

import { Card, CardTitle, CardText } from 'react-md/lib/Cards'
import Media, { MediaOverlay } from 'react-md/lib/Media'

class Shelves extends Component{
  static propTypes = {
    books: PropTypes.array,
    addBook: PropTypes.func,
    clearQuery: PropTypes.func,
    transferShelf: PropTypes.func
  }

  render() {
    const { books, transferShelf, addBook, clearQuery } = this.props

    if (books){
      console.log("Shelves: books")
      console.log(books)
      return (
          <div className="md-grid">
          {books.map((book) => (
            <Card className="md-cell md-cell--6 md-cell--8-tablet" key={book.id}>
              <Media aspectRatio="1-1">
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <MediaOverlay>
                  <CardTitle title={book.title} />
                </MediaOverlay>
              </Media>
              <ShelfChanger 
                book={book}
                transferShelf={transferShelf}
                addBook={addBook}
                clearQuery={clearQuery}
                shelf={book.shelf} />
              <CardText>
                <h4>Author(s):</h4>
                {book.authors.map(author => (author) ? 
                    <h3 key={author}>{author}</h3> : <h3 key={author}>None</h3>
                )}
                
              </CardText>
              
            </Card>
          ))}
      </div>
      )
    }else{
      return(
        <div><h2> 0 found </h2></div>
      )
    }
  }
}

export default Shelves
