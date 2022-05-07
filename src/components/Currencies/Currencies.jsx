import React, { Component } from 'react'
import './Currencies.css';

export default class Currencies extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  };

  selectInput = React.createRef()  
  
  handleClick = () => {
    console.log(this.selectInput.current.value)
  };

  render() {
    return (
      <div className='currencies-container'>
        <select ref={this.selectInput} onChange={this.handleClick} className='select-currencies'>
          {this.props.currencies.map((eachCurrency) => {
            return <option value={eachCurrency.symbol}>{eachCurrency.symbol}</option>
          })}
        </select>
      </div>
    )
  }
}
