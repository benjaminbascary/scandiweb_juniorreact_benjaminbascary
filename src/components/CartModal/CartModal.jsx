import React, { Component } from 'react';
import Portal from '../Portal/Portal';
import './CartModal.css';

export default class CartModal extends Component {
  render() {

  const { toggle, active } = this.props;

    return (
      <Portal>
        {active && (
          <div style={styles.wrapper}>
            <div style={styles.window}>
              
              <button className='check-out-modal-button' style={styles.closeBtn} onClick={toggle}>CHECK OUT</button>
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
    height: "94vh",
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
    height: "500px",
  },
  closeBtn: {
    background: "#5ECE7B",
    position: "absolute",
    bottom: 0,
    right: 0,
  }
};