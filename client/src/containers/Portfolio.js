import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks'
import { addUserStock } from '../actions/addUserStock'
import { createStock } from '../actions/createStock'

import { updateStocks} from '../actions/updateStocks'
import StockForm  from './StockForm'
import StockList  from './StockList'
import StockShow from '../components/StockShow'
import ErrorDiv from '../components/ErrorDiv'
class Portfolio extends Component {

onHandleClick = event =>{
	this.props.createStock()
}
componentDidMount() {
  this.interval = setInterval(() => this.props.updateStocks(), 50000);
 }
componentWillUnmount() {
  clearInterval(this.interval);
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
  return { fetchStocks: () => dispatch(fetchStocks()), addUserStock: (sym) => dispatch(addUserStock(sym)), createStock: () => dispatch(createStock()), updateStocks: () => dispatch(updateStocks()) }
}

const mapStateToProps = (state) => {
  return { stock: state.stocks.stock };
};
 
export default connect(mapStateToProps, mapDispatchToProps) (Portfolio);