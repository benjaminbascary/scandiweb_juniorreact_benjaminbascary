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
									{}
								</div>
								<div className='info-modal-container-rigth'>
									<p>{this.state.product.props.brand}</p>
									<p>{this.state.product.props.name}</p>
									{parse(this.state.product.props.description)}
								</div>
							</div>
							<div>{console.log(this.state.product)}</div>
							<button className='modal-button' style={styles.closeBtn} onClick={toggle}>SAVE</button>
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
    position: "absolute",
    bottom: 0,
    right: 0,
  }
};