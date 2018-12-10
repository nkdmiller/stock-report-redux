import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks'
import { addUserStock } from '../actions/addUserStock'
import { createStock } from '../actions/createStock'
import StockForm  from './StockForm'
import StockList  from './StockList'
import StockShow from '../components/StockShow'
import ErrorDiv from '../components/ErrorDiv'
class Portfolio extends Component {

onHandleClick = event =>{
	this.props.createStock()
}


  render() {
  	let stockShow = ""
	if (this.props.stock){
		stockShow = <StockShow props={{ stock: this.props.stock}} />
	}
    return (
      <div className="Portfolio">
      <StockForm/>
      	<ErrorDiv/>
        {stockShow}
        <button className = "button-green" onClick={this.onHandleClick} value={this.props.stock.symbol}>Add Stock to Portfolio</button>
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