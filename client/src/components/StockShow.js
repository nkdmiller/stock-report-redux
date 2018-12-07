import React, { Component } from 'react';
const StockShow = props => {
  debugger
  return (
    <table class ="stock-table">
    <thead>
      <tr>
      <th>Company</th>
      <th>Symbol</th>
      <th>Price</th>
      <th>Change</th>
      <th>Sector</th>
      </tr>
    </thead>
    <tbody>
    	<tr>
    	<td>{props.props.stock.companyName}</td>
      <td>{props.props.stock.symbol}</td>
      <td>{props.props.stock.price}</td>
      <td>{props.props.stock.change}</td>
      <td>{props.props.stock.sector}</td>
      </tr>
    </tbody>
    </table>
  );
};
 
export default StockShow;