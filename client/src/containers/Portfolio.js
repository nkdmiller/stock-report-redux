import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks'
import StockForm  from './StockForm'
class Portfolio extends Component {

  render() {
    return (
      <div className="Portfolio">
      <StockForm/>
        <p>{this.props.stock}</p>
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