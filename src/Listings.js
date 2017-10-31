import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TabsContainer, Tabs, Tab } from 'react-md'
import TabsNav from './TabsNav'

class Listings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    transferShelf: PropTypes.func,
    shelves: PropTypes.array.isRequired,
    shelf: PropTypes.string
  }
  render() {
    const { books, transferShelf, shelves, shelf } = this.props
    return(
      <div>
        <TabsContainer panelClassName="md-grid" colored>
          <Tabs tabId="TabsNav-tab">
            {shelves.map(shelf =>
            <Tab label={shelf.title} key={shelf.title}>
              <TabsNav 
                books={books} 
                search={false}
                shelf={shelf.slug}
                transferShelf={transferShelf}/>
            </Tab>
            )}
          </Tabs>
        </TabsContainer>
      </div>
    )
  }
}
export default Listings