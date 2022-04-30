import React, { Component } from 'react'
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
        <div className='header'>
          <h1>I am the header</h1>
        </div>
        <div className='wrapper'>
          <div className='products-wrapper'>
            {this.state.products.props.map((eachProduct) => {
              return  <Product props={eachProduct}/>
            })}
          </div>
        </div>
        </React.Fragment>
    );
  };
};
