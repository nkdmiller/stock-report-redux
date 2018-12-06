import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks'
import StockForm  from './StockForm'
class Portfolio extends Component {

onHandleClick = event =>{
	debugger
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
  return { fetchStocks: () => dispatch(fetchStocks()) }
}

const mapStateToProps = (state) => {
  return { stock: state.stocks.stock };
};
 
export default connect(mapStateToProps, mapDispatchToProps) (Portfolio);