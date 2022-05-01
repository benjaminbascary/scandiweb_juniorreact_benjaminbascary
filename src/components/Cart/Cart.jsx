import React, { Component } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cart : props.products
		};
	};

	currentCart = () => {
		console.log(`there is currently ${this.state.cart.length} products in the cart`)
	};

  render() {
    return (
			<div className='cart-container'>
				<button onClick={() => this.currentCart()}>
					How many in the cart?
				</button>
				<ul>
					{this.state.cart.map((eachProduct) => {
						return <li>{eachProduct}</li>
					})}
				</ul>
			</div>
    );
  };
};
