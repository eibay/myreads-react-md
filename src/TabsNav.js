import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TabsContainer, Tabs, Tab } from 'react-md'
import Shelves from './Shelves'

class TabsNav extends Component{
    static propTypes = {
    books: PropTypes.array.isRequired
  }

  render(){
    const {books} = this.props
    return(
      <div>
        <TabsContainer panelClassName="md-grid" colored>
          <Tabs tabId="TabsNav-tab">
            <Tab label="Currently Reading">
              <h3>I am currently reading all these books!</h3>
            </Tab>
            <Tab label="Want To Read">
              <h3>Want To Read books will be shown here!</h3>
            </Tab>
            <Tab label="Read">
              <h3>Read books will be listed here!</h3>
            </Tab>
          </Tabs>
        </TabsContainer>

        <Shelves books={books} />
      
      </div>
    )
  }
}

export default TabsNav
