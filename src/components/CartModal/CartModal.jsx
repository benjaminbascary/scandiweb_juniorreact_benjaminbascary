import React, { Component } from 'react';
import Portal from '../Portal/Portal';
import './CartModal.css';
import { COINS } from '../../utils/Enums';

export default class CartModal extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  setTotal = () => {
		let totalSum = 0;
		this.props.cart.map(each => {
			return totalSum = totalSum + each.prices[COINS.USD.index].amount
		})
		return totalSum;
	}

  render() {

  const { toggle, active } = this.props;

    return (
      <Portal>
        {active && (
          <div style={styles.wrapper}>
            <div style={styles.window}>
              <div className='pre-cart-container'>
                <div className='pre-cart-quantity'>
                  <p className='pre-cart-quantity-text'>My Bag, {this.props.cart.length} items</p>
                </div>
                {
                  this.props.cart.map((eachItem => {
                    return (
                      <div key={eachItem.name} className='pre-cart-item-container'>
                        <div className='pre-cart-item-container-left'>
                          <p className='pre-cart-item-brand'>{eachItem.brand}</p>
                          <p className='pre-cart-item-name'>{eachItem.name}</p>
                          <div className='pre-cart-item-atributes-container'>
                            {eachItem.attributes.map(each => {
                              return ( 
                                <div>
                                  <p className='pre-cart-item-attribute'>{each.name}</p>                                  
                                  <div className='pre-cart-item-attribute-values-container'>
                                  {
                                    each.name === "Color" ?
                                      each.items.map(each => {
                                      return <div className='color-container' style={{ backgroundColor: `${each.value}`}}></div>
                                      })
                                    : 
                                      each.items.map(each => {
                                        return <div className='value-container'><p>{each.value}</p></div>
                                        })
                                  }                                  
                                  </div>                                  
                                </div>
                              )
                            })}
                          </div>                          
                        </div>
                        <div>
                          <img 
                            className='pre-cart-item-image'
                            src={eachItem.gallery[0]}
                            alt="item"
                          />
                        </div>
                      </div>
                      )
                  }))
                
                }
              <div className='total-container'>
                <p>Total: </p>
                <p>  {COINS.USD.symbol} {(Number(this.setTotal().toFixed(2)))}</p>
              </div>
              </div>
              <button 
                className='check-out-modal-button' 
                style={styles.checkOutBtn} 
                onClick={() => {this.props.goToCart(); this.props.toggle()}}
              >
                CHECK OUT
              </button>
              <button 
                className='close-button'
                onClick={toggle}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Portal>
    )
  }
}

const styles = {
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "174%",
    height: "108vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  window: {
    display: "flex",
    flexDirection: "colum",
    position: "relative",
    background: "#fff",
    borderRadius: 5,
    padding: 15,
    boxShadow: "2px 2px 18px rgba(0,0,0,0.3)",
    zIndex: 10,
    minWidth: "30vh",
    width: "300px",
    height: "600px",
  },
  checkOutBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
};
