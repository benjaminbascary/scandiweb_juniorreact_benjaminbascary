import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import CartModal from '../CartModal/CartModal';
import "./Dashboard.css";
import Currencies from '../Currencies/Currencies';

import { COINS } from '../../utils/Enums';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products : {...props},
      currencies : this.props.currencies,
      currentSymbol: COINS.USD.symbol,
      currentPriceIndex: 0,
      cart : [],
      showShop: true,
      showPreCart: false,
      active: false,
      counter: 0,
    };
  };

  addProductToCart = (id) => {
    this.state.cart.push(id)
  };

  toggleShow = () => {
    this.setState(({showShop}) => ({showShop: !showShop}))
  };

  setActive = () => {
    this.setState(({active}) => ({active: !active}))
  };

  updateCounter = () => {
    this.setState(prev => ({ counter: prev.counter + 1 }))
  };

  setCurrentCurrency = (symbol) => {
    this.setState(({currentSymbol : symbol}))
  };

  render() {
    return (
      <div>
        <div className='header-container'>
          <div className='title-container'>
            <h1 className='header-title'>Scandiweb Store</h1>
          </div>
          <div className='button-container' onClick={this.toggleShow}>
            <p className='button-container-text'>{this.state.showShop ? "CHECK OUT" : "CONTINUE SHOPPING"}</p>
          </div>
          <div className='button-currencies-container'>
            <Currencies handleChange={this.setCurrentCurrency} currencies={this.props.currencies}/>
            {this.state.active? <CartModal active={this.state.active} toggle={this.setActive} children={<div>hola</div>}/> : ""}
            <div>
            <div className='cart-product-counter'>
              {this.state.counter}
            </div>
            <img className="header-cart-button" onClick={this.setActive} src="./resources/cart.png" alt="pre-cart"></img>
          </div>
        </div>
        </div>
        {
          this.state.showShop?
            <div className='wrapper'>
              <div className='products-wrapper'>
                {
                  this.state.products.props.map((eachProduct) => {
                    return  <Product
                              key={eachProduct.id} 
                              props={eachProduct}
                              updateCounter={this.updateCounter}
                              add={this.addProductToCart}
                              symbol={this.state.currentSymbol}
                            />
                    })
                }
              </div>
            </div>
          :
            <Cart 
              products={this.state.cart}
              symbol={this.state.currentSymbol}
            />
        }
      </div>
    );
  };
};
