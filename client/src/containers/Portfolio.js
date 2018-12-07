import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks'
import { addUserStock } from '../actions/addUserStock'
import { createStock } from '../actions/createStock'
import StockForm  from './StockForm'
import StockList  from './StockList'

class Portfolio extends Component {

onHandleClick = event =>{
	this.props.createStock()
}
  render() {
    return (
      <div className="Portfolio">
      <StockForm/>
        
        <button onClick={this.onHandleClick} value={this.props.stock.symbol}>Add Stock to Portfolio</button>
      <StockList/>
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