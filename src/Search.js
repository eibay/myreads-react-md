import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Shelves from './Shelves'

export default class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    return(
      <div>
        <Shelves books={books}/>
      </div>    
    )
  }
}