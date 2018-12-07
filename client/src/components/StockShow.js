import React, { Component } from 'react';
const StockShow = props => {
  debugger
  return (
    <table class ="stock-table">
  	<tr>
  	<td>{props.props.stock.companyName}</td>
    <td>{props.props.stock.symbol}</td>
    <td>{props.props.stock.price}</td>
    <td>{props.props.stock.change}</td>
    <td>{props.props.stock.sector}</td>
    </tr>
    </table>
  );
};
 
export default StockShow;