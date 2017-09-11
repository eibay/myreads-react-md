import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import NavLink from './NavLink'

import Home from './Home'
import Search from './Search'
import ListBooks from './ListBooks'
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
}]

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="Menu"
            toolbarTitle="MyReads"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}>
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
              <Route path="/search" location={location} component={Search} />
              <Route path="/listbooks" location={location} component={ListBooks} />
              <Route path="/about" location={location} component={About} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    )
  }
}

export default App
