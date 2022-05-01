import React, { Component } from 'react'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products : {...props},
      cart : [],
      showShop: true 
    };
  };

  addProductToCart = (id) => {
    console.log(`adding... with id ${id}`)
    this.state.cart.push(id)
  }

  toggleShow = () => {
    this.setState(({showShop}) => ({showShop: !showShop}))
  }

  render() {
    return (
      <div>
        <div className='header-container'>
          <h1>Scandiweb Store</h1>
          <img
            className='cart-button'
            src='./resources/cart.png'
            alt='cart-button' 
            onClick={this.toggleShow}
          />
          
        </div>
        {
          this.state.showShop?
            <div className='wrapper'>
              <div className='products-wrapper'>
                {this.state.products.props.map((eachProduct) => {
                  return  <Product 
                            key={eachProduct.id} 
                            props={eachProduct} 
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
