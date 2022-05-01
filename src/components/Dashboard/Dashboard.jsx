import React, { Component } from 'react'
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products : {...props},
      cart : []
    };
  };

  addProductToCart = (id) => {
    console.log(`adding... with id ${id}`)
    this.state.cart.push(id)
    console.log(this.state.cart)
  }

  render() {
    return (
        <React.Fragment>
        <Header />
        <Cart products={this.state.cart}/>
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
        </React.Fragment>
    );
  };
};
