import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { Card, CardTitle, CardText } from 'react-md/lib/Cards'
import Media, { MediaOverlay } from 'react-md/lib/Media'

class Shelves extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    return (
      <div className="md-grid">
          {books.map((book) => (
            <Card className="md-cell" key={book.id}>
              <Media aspectRatio="1-1">
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <MediaOverlay>
                  <CardTitle title={book.title} />
                </MediaOverlay>
              </Media>
              <CardText>
                <p>Author: {book.authors}</p>
              </CardText>
            </Card>
          ))}
      </div>
    )
  }
}

export default Shelves
