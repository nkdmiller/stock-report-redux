import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks'
import { addUserStock } from '../actions/addUserStock'
import StockForm  from './StockForm'
class Portfolio extends Component {

onHandleClick = event =>{
	let sym = event.target.value
	  fetch('/stock/new', {
	    method: 'POST',
	    headers: {
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	    }, body: JSON.stringify(sym)
	  })
	  debugger
	this.props.addUserStock()
}
  render() {
    return (
      <div className="Portfolio">
      <StockForm/>
        <p>{this.props.stock}</p>
        <button onClick={this.onHandleClick} value={this.props.stock}>Add Stock to Portfolio</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchStocks: () => dispatch(fetchStocks()), addUserStock: (sym) => dispatch(addUserStock(sym)) }
}

const mapStateToProps = (state) => {
  return { stock: state.stocks.stock };
};
 
export default connect(mapStateToProps, mapDispatchToProps) (Portfolio);