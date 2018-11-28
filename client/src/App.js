import About from './StaticContent/About'
import Home from './StaticContent/Home'
import MainProducts from './Products/Main'
import Cart from './Cart/Cart'
import NavBarComp from './Navbar/NavBarComp'
import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'


export default class App extends React.Component {
  render(){
      return(
          <Router>
            <div>
              <NavBarComp />
              <Route exact path = "/" component = {Home}/>
              <Route path = '/about' component = {About}/>
              <Route path = '/products' component = {MainProducts}/>
              <Route path = '/cart' component = {Cart}/>
            </div>
          </Router>
      )
  }
}



