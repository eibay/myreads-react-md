import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import NavLink from './NavLink'

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
      label: 'List Books',
      to: '/listbooks',
      icon: 'donut_large',
    }, {
      label: 'About',
      to: '/about',
      icon: 'flight_land',
    }
  ]

export default class Navigation extends Component{
  static proptypes = {
    books: PropTypes.array.isRequired,
    listTitles: PropTypes.string,
    shelves: PropTypes.array
  }

  render(){
    const {books, listTitles, shelves} = this.props
    return(
      <Route
        render={({ location }) => (
          <div>
          <NavigationDrawer
            drawerTitle="Menu"
            toolbarTitle="MyReads"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}>
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
              <Route path="/about" location={location} component={About} />

              <Route path="/search" location={location} 
                render={()=> ( <Search books={books} /> )}/>

              <Route path="/listbooks" location={location} 
                render={()=> (<Listings books={books} shelves={shelves}/> )}/>

            </Switch>
          </NavigationDrawer>
          </div>  
        )}
      />
    )
  }
}