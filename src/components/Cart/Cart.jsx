import React, { Component } from 'react';
import { DEFAULT_IMG_INDEX, DEFAULT_TAX } from '../../utils/Defaults';
import { COINS } from '../../utils/Enums';
import './Cart.css';

export default class Cart extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cart : props.products,
			finalPrice : 0,
		};
	};

	currentCart = () => {
		console.log(`there is currently ${this.state.cart.length} products in the cart`)
	};

	setTotal = () => {
		let totalSum = 0;
		this.state.cart.map(each => {
			return totalSum = totalSum + each.prices[COINS.USD.index].amount
		})
		return totalSum;
	}

  render() {
    return (
			<div className='cart-container'>
				<div className={this.state.cart.length ? 'cart-list-container' : 'cart-list-container empty'}>
					{
						this.state.cart.map((eachProduct) => {
							return (
								<div key={eachProduct.id} className='cart-product-container'>
									{console.log(eachProduct)}
									<div className='cart-product-image-container'>
										<img
										className='product-image'
										src={eachProduct.gallery[DEFAULT_IMG_INDEX]}
										alt={eachProduct.name}
										/>
									</div>
									<div className='cart-product-info-container'>
										<p>{eachProduct.name}</p>
										<p>{eachProduct.brand}</p>
									</div>
									<div className='cart-product-price-container'>
										<p className='cart-product-price'>
											{
												this.props.symbol === COINS.USD.symbol ? eachProduct.prices[COINS.USD.index].amount
												:
												this.props.symbol === COINS.LIB.symbol ? eachProduct.prices[COINS.LIB.index].amount
												:
												this.props.symbol === COINS.AUS.symbol ? eachProduct.prices[COINS.AUS.index].amount
												:
												this.props.symbol === COINS.YEN.symbol ? eachProduct.prices[COINS.YEN.index].amount
												:
												this.props.symbol === COINS.RUB.symbol ? eachProduct.prices[COINS.RUB.index].amount
												:
												null
											}
										</p>
										<p className='cart-product-currency'>
											{	
												this.props.symbol === COINS.USD.symbol ? [COINS.USD.symbol] 
												:
												this.props.symbol === COINS.LIB.symbol ? [COINS.LIB.symbol]
												:
												this.props.symbol === COINS.AUS.symbol ? [COINS.AUS.symbol]
												:
												this.props.symbol === COINS.YEN.symbol ? [COINS.YEN.symbol]
												:
												this.props.symbol === COINS.RUB.symbol ? [COINS.RUB.symbol]
												:
												null
											}	
										</p>
									</div>
								</div>
							);
						})
					}
        
				</div>
				{
        	this.state.cart.length ?
						<div className='total-container'>
							<p className="total-info">Sub: {COINS.USD.symbol} {this.setTotal().toFixed(2)}</p>
							<p className="total-info tax-info">{`TAX: ${DEFAULT_TAX}`}</p>
							<p className="total-info tax-info">Qty: {this.state.cart.length}</p>
							<h3 className="total-info">TOTAL: {COINS.USD.symbol} {(Number(this.setTotal().toFixed(2)) + Number(DEFAULT_TAX))}</h3>
        			<button className='order-button'>ORDER</button>
						</div>
        	: 
						<div className='empty-bag-container'>
        			<p className='empty-bag-message'>Oops! Looks like you haven't added anything to your cart yet!</p>
						</div>
        }
			</div>
    );
  };
};
