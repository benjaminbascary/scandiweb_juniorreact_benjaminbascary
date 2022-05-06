import React, { Component } from 'react';
import Portal from '../Portal/Portal';
import parse from 'html-react-parser';
import "./InfoModal.css";

export default class InfoModal extends Component {

  constructor(props){
		super(props)
		this.state = {
			product : props.props
		}
	}

  render() {

  const { children, toggle, active } = this.props;

    return (
      <Portal>
        {active && (
          <div className="" style={styles.wrapper}>
            <div className="info-modal-wrapper" style={styles.window}>
            	<div>{children}</div>
							<div className='info-modal-container'>
								<div className='info-modal-container-left'>
									{
										this.state.product.props.gallery.length > 0 ? 
										<div className='thumbnail-gallery'>
											{this.state.product.props.gallery.map((each) => {
												return <img className="thumbnail" src={each} alt="thumbnail"/>
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
											<div>{
												this.state.product.props.attributes.map((eachAtr => {
													return <div className='each-attribute-container'>
																	<p className='attribute-name'>{eachAtr.name}:</p>
																		<div className='attributes-container'>
																			{eachAtr.items.map(eachSubAtr => {return <p className='attribute'>{eachSubAtr.value}</p>})}
																		</div>
																</div>
												}))}
											</div>
										}
									</div>
									<p className='info-modal-price-text'>PRICE:</p>
									<p className='info-modal-price-numbers'>{this.state.product.props.prices[0].currency.label} {this.state.product.props.prices[0].amount}</p>
									<button className='info-modal-button' style={styles.closeBtn} onClick={toggle}>ADD TO CART</button>
									<div className='.info-modal-description'>{parse(this.state.product.props.description)}</div>
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
    left: 0,
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
    background: "#5ECE7B",
  }
};
