import About from '../StaticContent/About'
import Home from '../StaticContent/Home'
import MainProducts from '../Products/Main'
import Cart from '../Cart/Cart'

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBarComp extends React.Component{
    render(){
        return(
            <ul style={{
                height:'60px', 
                background:'#ddd', 
                display:'flex',
                alignItems:'center',
                justifyContent:'space-around'
            }}>
                <li>
                    <NavLink to="/"
                      activeStyle ={Home}
                    >
                    {'Home'}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                      activeStyle ={About}
                    >
                    {'About'}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products"
                      activeStyle ={MainProducts}
                    >
                    {'Products'}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart"
                      activeStyle ={Cart}
                    >
                    {'Cart'}
                    </NavLink>
                </li>
            </ul> 
        )
    }
  }