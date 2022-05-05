import React, { Component } from 'react';
import Portal from '../Portal/Portal';
import "./InfoModal.css";
export default class InfoModal extends Component {

  constructor(props){
		super(props)
		this.state = {
			product : {...props}
		}
	}

  render() {

  const { children, toggle, active } = this.props;

    return (
      <Portal>
        {active && (
          <div className="" style={styles.wrapper}>
            <div className="info-modal-wrapper" style={styles.window}>
              <button className='modal-button' style={styles.closeBtn} onClick={toggle}>SAVE</button>
              <div>{children}</div>
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
		width: "100%",
    minWidth: "30vh",
    height: "80vh",
		marginTop: "200px",
  },
  closeBtn: {
    background: "#5ECE7B",
    position: "absolute",
    bottom: 0,
    right: 0,
  }
};