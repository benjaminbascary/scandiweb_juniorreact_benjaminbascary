import React, { Component } from 'react';
import './Cart.css';

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
				<div className='cart-list-container'>
					{this.state.cart.map((eachProduct) => {
						return (
							<div key={eachProduct.id} className='cart-product-container'>
								{console.log(eachProduct)}
								<div className='cart-product-image-container'>
									<img
									className='product-image'
									src={eachProduct.gallery[0]}
									alt={eachProduct.name}
									/>
								</div>
								<div className='cart-product-info-container'>
									<p>{eachProduct.name}</p>
									<p>{eachProduct.brand}</p>
								</div>
								<div className='cart-product-price-container'>
									<input type='number' placeholder='1' className='cart-product-quantity-input'></input>
									<p className='cart-product-prince'>{eachProduct.prices[0].amount}</p>
									<p className='cart-product-currency'>{eachProduct.prices[0].currency.label}</p>
								</div>
							</div>
							);
					})}
        {
        this.state.cart.length?
        <button className='order-button'>ORDER</button>
        : 
        "You have no items in your bag yet!"
        }
				</div>
			</div>
    );
  };
};
