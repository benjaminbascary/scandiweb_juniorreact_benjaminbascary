import React, { Component } from 'react';
import "./Product.css";
import InfoModal from '../InfoModel/InfoModal';

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product : {...props},
      active: false,
    };
  };

  setActive = () => {
    this.setState(({active}) => ({active: !active}))
  }

  render() {
    return (
      <div className='product-wrapper'>
        <div className='image-wrapper'>
          <img
            className={this.state.product.props.inStock ? "image" : "image out-stock"} 
            src={this.state.product.props.gallery[0]} 
            alt="img"
          ></img>
          <div className='out-stock-container'>
            <p className='out-stock-text'>{this.state.product.props.inStock ? "" : "OUT OF STOCK"}</p>
          </div>
        </div>
        <div className='info-wrapper'>
          <p className='info-title'>{this.state.product.props.name}</p>
          <p className='info-brand'>{this.state.product.props.brand}</p>
          <div className='info-price-stock-container'>
            <p className='info-price'>{this.state.product.props.prices[0].amount}</p>
            {
              this.state.product.props.inStock ?
              <img
                className='add-product-button'
                src='./resources/add.png'
                alt='add'
                onClick={() => {this.props.add(this.state.product.props); this.props.updateCounter()}}>
              </img>
            :
              null
            }
          </div>
        </div>
        <button onClick={this.setActive}>show info</button>
        {this.state.active? 
          <InfoModal 
            active={this.state.active} 
            toggle={this.setActive} 
            children={<div>{this.state.product.props.name}</div>}
            props={this.state.product}
          />
          : 
          ""
        }
      </div>
    );
  };
};
