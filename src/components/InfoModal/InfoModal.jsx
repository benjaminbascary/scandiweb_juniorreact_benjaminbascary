import React, { Component } from 'react';
import Portal from '../Portal/Portal';
import parse from 'html-react-parser';
import "./InfoModal.css";
import { COINS } from '../../utils/Enums';

export default class InfoModal extends Component {

  constructor(props){
		super(props)
		this.state = {
			product : props.props
		};
	};

  render() {

  const { children, toggle, active } = this.props;

    return (
      <Portal>
        {active && (
          <div className="portal-container" style={styles.wrapper}>
            <div className="info-modal-wrapper" style={styles.window}>
            	<div>{children}</div>
							<div className='info-modal-container'>
								<div className='info-modal-container-left'>
									{
										this.state.product.props.gallery.length > 0 ? 
										<div className='thumbnail-gallery'>
											{this.state.product.props.gallery.map((each) => {
												return <img key={each} className="thumbnail" src={each} alt="thumbnail"/>
											})}
										</div>
									: 
										""
									}
										<img 
											className='main-thumbnail'
											src={this.state.product.props.gallery[0]}
											alt="product"
										/>
								</div>
								<div className='info-modal-container-rigth'>
									<p className='info-modal-brand'>{this.state.product.props.brand}</p>
									<p className='info-modal-name'>{this.state.product.props.name}</p>
									<div className='attributes-container'>
										{
											this.state.product.props.attributes.length === 0 ? 
												null 
											: 
											<div>
												{
												this.state.product.props.attributes.map((eachAtr => {
													return <div key={eachAtr.name} className='each-attribute-container'>
																	<p className='attribute-name'>{eachAtr.name}:</p>
																	{
																		eachAtr.name === "Color" ?  
																		<div className='attributes-container'>
																			{eachAtr.items.map(eachSubAtr => {return <div className='color-attribute' style={{ backgroundColor: `${eachSubAtr.value}`}}></div>})}
																		</div>
																	:  
																		<div className='attributes-container'>
																			{eachAtr.items.map(eachSubAtr => {return <p className='attribute'>{eachSubAtr.value}</p>})}
																		</div>
																	}
																</div>
												}))}
											</div>
										}
									</div>
									<p className='info-modal-price-text'>PRICE:</p>
									<div className='info-modal-price-numbers'>
										{ 
											this.props.symbol === COINS.USD.symbol ? 
											<div className='coin-label-container'>
												<p>{this.state.product.props.prices[COINS.USD.index].currency.label}</p>
												<p>{this.state.product.props.prices[COINS.USD.index].amount}</p>
											</div>
											:
											this.props.symbol === COINS.LIB.symbol ?
											<div className='coin-label-container'>
												<p>{this.state.product.props.prices[COINS.LIB.index].currency.label}</p>
												<p>{this.state.product.props.prices[COINS.LIB.index].amount}</p>
											</div>
											:
											this.props.symbol === COINS.AUS.symbol ?
											<div className='coin-label-container'>
												<p>{this.state.product.props.prices[COINS.AUS.index].currency.label}</p>
												<p>{this.state.product.props.prices[COINS.AUS.index].amount}</p>
											</div>
											:
											this.props.symbol === COINS.YEN.symbol ?
											<div className='coin-label-container'>
												<p>{this.state.product.props.prices[COINS.YEN.index].currency.label}</p>
												<p>{this.state.product.props.prices[COINS.YEN.index].amount}</p>
											</div>
											:
											this.props.symbol === COINS.RUB.symbol ?
											<div className='coin-label-container'>
												<p>{this.state.product.props.prices[COINS.RUB.index].currency.label}</p>
												<p>{this.state.product.props.prices[COINS.RUB.index].amount}</p>
											</div>
											:
											null	
										}
									</div>
									<button onClick={() => {this.props.update(); toggle()}} className='info-modal-button' style={styles.closeBtn} >ADD TO CART</button>
									<div className='info-modal-description'>
										{parse(this.state.product.props.description)}
									</div>
									<button className='info-modal-close-button' onClick={toggle}>Close</button>
								</div>
							</div>
							<div>{console.log(this.state.product)}</div>
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
		left: 1,
		right: 1,
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  window: {
    display: "flex",
    flexDirection: "colum",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    background: "#fff",
    borderRadius: 5,
    padding: 15,
    boxShadow: "2px 2px 18px rgba(0,0,0,0.3)",
    zIndex: 11,
		width: "90%",
    minWidth: "30vh",
    height: "80vh",
		marginTop: "100px",
  },
  closeBtn: {
    
  }
};
