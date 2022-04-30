import React, { Component } from 'react'
import "./Product.css"

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product : {...props}
    }
  }

  render() {
    return (
      <div className='product-wrapper'>
        <div className='image-wrapper'>
          <img src={this.state.product.props.gallery[0]} alt="img"></img>
        </div>
        <div className='info-wrapper'>
          <p className='info-title'>{this.state.product.props.name}</p>
        </div>
      </div>
    )
  }
}
