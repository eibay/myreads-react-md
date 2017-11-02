import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import NavLink from './NavLinks'

import Home from './Home'
import Search from './Search'
import Listings from './Listings'
import About from './About'

    const navItems = [{
      exact: true,
      label: 'Home',
      to: '/',
      icon: 'home',
    }, {
      label: 'Search',
      to: '/search',
      icon: 'bookmark',
    }, {
      label: 'About',
      to: '/about',
      icon: 'flight_land',
    }
  ]

export default class Navigation extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array,
    transferShelf: PropTypes.func
  }

  render(){
    const {books, shelves, transferShelf} = this.props
    return(
      <Route
        render={({ location }) => (
          <div>
            <NavigationDrawer
              drawerTitle="Menu"
              toolbarTitle="myEbookz"
              navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}>
              <Switch key={location.key}>
                <Route exact path="/" location={location} 
                  render={()=> (<Listings 
                                    books={books} 
                                    shelves={shelves} 
                                    transferShelf={transferShelf} /> )}/>

                <Route path="/about" location={location} component={About} />

                <Route path="/search" location={location} 
                  render={()=> ( <Search 
                                    books={books}
                                    shelves={shelves}
                                    transferShelf={transferShelf} /> )}/>

              </Switch>
            </NavigationDrawer>
          </div>)
        }/>
    )
  }
}