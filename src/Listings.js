import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TabsNav from './TabsNav'


export default class Listings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    return(
      <div>
        <TabsNav books={books}/>
      </div>    
    )
  }
}