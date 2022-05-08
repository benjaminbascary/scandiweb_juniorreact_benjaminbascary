import React, { Component } from 'react'
import './Currencies.css';

export default class Currencies extends Component {

  constructor(props){
    super(props)
    this.state = {
      symbol : "$"
    };
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
              return <option value={eachCurrency.symbol}>{eachCurrency.symbol}</option>
            })
          }
        </select>
      </div>
    )
  };
};
