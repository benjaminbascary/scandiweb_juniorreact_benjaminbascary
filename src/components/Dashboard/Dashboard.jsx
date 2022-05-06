import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import CartModal from '../CartModal/CartModal';
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products : {...props},
      currency : {},
      cart : [],
      showShop: true,
      showPreCart: false,
      active: false,
      counter: 0,
    };
  };

  addProductToCart = (id) => {
    this.state.cart.push(id)
  }

  toggleShow = () => {
    this.setState(({showShop}) => ({showShop: !showShop}))
  }

  setActive = () => {
    this.setState(({active}) => ({active: !active}))
  }

  updateCounter = () => {
    this.setState(prev => ({ counter: prev.counter + 1 }))
  }

  render() {
    return (
      <div>
        {console.log(this.props.currencies)}
        <div className='header-container'>
          <div className='title-container'>
            <h1 className='header-title'>Scandiweb Store</h1>
          </div>
          <div>
            <div className='cart-product-counter'>
              {this.state.counter}
            </div>
            <img className="header-cart-button" onClick={this.setActive} src="./resources/cart.png" alt="pre-cart"></img>
          </div>
          {this.state.active? <CartModal active={this.state.active} toggle={this.setActive} children={<div>hola</div>}/> : ""}
          <div className='button-container' onClick={this.toggleShow}>
            <p className='button-container-text'>{this.state.showShop ? "CHECK OUT" : "CONTINUE SHOPPING"}</p>
          </div>
        </div>
        {
        this.state.showShop?
          <div className='wrapper'>
            <div className='products-wrapper'>
              {this.state.products.props.map((eachProduct) => {
                return  <Product 
                          key={eachProduct.id} 
                          props={eachProduct}
                          updateCounter={this.updateCounter}
                          add={this.addProductToCart}
                        />
              })}
            </div>
          </div>
        :
          <Cart products={this.state.cart}/>
        }
      </div>
    );
  };
};
