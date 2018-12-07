import React, { Component } from 'react';
const Stock = props => {
	let renderHead = ""
	let renderEnd = ""

  return (
  	<tr>
  	<td>{props.stock.companyName}</td>
    <td>{props.stock.symbol}</td>
    <td>{props.stock.price}</td>
    <td>{props.stock.change}</td>
    <td>{props.stock.sector}</td>
    </tr>

  );
};
 
export default Stock;