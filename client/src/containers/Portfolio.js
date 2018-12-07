import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks'
import { addUserStock } from '../actions/addUserStock'
import { createStock } from '../actions/createStock'
import StockForm  from './StockForm'
class Portfolio extends Component {

onHandleClickk = event =>{
	this.props.createStock()
}
  render() {
    return (
      <div className="Portfolio">
      <StockForm/>
        <p>{this.props.stock.symbol}</p>
        <button onClick={this.onHandleClickk} value={this.props.stock.symbol}>Add Stock to Portfolio</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchStocks: () => dispatch(fetchStocks()), addUserStock: (sym) => dispatch(addUserStock(sym)), createStock: () => dispatch(createStock()) }
}

const mapStateToProps = (state) => {
  return { stock: state.stocks.stock };
};
 
export default connect(mapStateToProps, mapDispatchToProps) (Portfolio);