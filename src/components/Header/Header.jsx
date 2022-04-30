import React, { Component } from 'react'
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className='header-container'>
          <div className='header-title-container'>
              <h1>SKANDIWEB</h1>
              <h2>Store</h2>
          </div>
      </div>
    )
  }
}
