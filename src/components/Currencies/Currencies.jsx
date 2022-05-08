import React, { Component } from 'react'
import './Currencies.css';

export default class Currencies extends Component {

  constructor(props){
    super(props)
    this.state = {};
  };

  selectInput = React.createRef();  

  handleChange = async () => {
    this.props.handleChange(this.selectInput.current.value);
  };

  render() {
    return (
      <div className='currencies-container'>
        <select ref={this.selectInput} onChange={this.handleChange} className='select-currencies'>
          {
            this.props.currencies.map((eachCurrency) => {
              return <option key={eachCurrency.symbol} value={eachCurrency.symbol}>{eachCurrency.symbol}</option>
            })
          }
        </select>
      </div>
    )
  };
};
