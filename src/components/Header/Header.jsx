import React, { Component } from 'react'
import "./Header.css";
import Cart from '../Cart/Cart';

export default class Header extends Component {
  render() {
    return (
      <div className='header-container'>
				<div className='header-title-container'>
					<h1>SCANDIWEB</h1>
					<h2>Store</h2>
				</div>
				<div className='header-cart-currencies'>
					<img
						className='cart-image'
						src="./resources/cart.png"
						alt="cart"	
					></img>
				</div>
      </div>
    )
  }
}
