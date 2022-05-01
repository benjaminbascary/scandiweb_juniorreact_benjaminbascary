import React, { Component } from 'react'
import Header from '../Header/Header';
import Product from '../Product/Product';
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products : {...props}
    };
  };

  render() {
    return (
        <React.Fragment>
        <Header />
        <div className='wrapper'>
          <div className='products-wrapper'>
            {this.state.products.props.map((eachProduct) => {
              return  <Product key={eachProduct.id} props={eachProduct}/>
            })}
          </div>
        </div>
        </React.Fragment>
    );
  };
};
