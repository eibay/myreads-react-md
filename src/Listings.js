import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TabsContainer, Tabs, Tab } from 'react-md'
import TabsNav from './TabsNav'

export default class Listings extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    transferShelf: PropTypes.func,
    shelves: PropTypes.array.isRequired
  }

  render() {
    const { books, transferShelf, shelves } = this.props
    console.log(books)
    return(
      <div>
        {shelves.map(shelf =>
        <div>
          <TabsContainer panelClassName="md-grid" colored>
            <Tabs tabId="TabsNav-tab">
              <Tab label={shelf.title}>
              </Tab>
            </Tabs>
          </TabsContainer>
            <TabsNav 
              books={books} 
              shelf={shelf.slug} 
              search={false}
              transferShelf={transferShelf}/>
        </div>
        )}
      </div>    
    )
  }
}