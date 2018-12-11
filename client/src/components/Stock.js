import React, { Component } from 'react';
import { deleteStock } from '../actions/deleteStock'
import { connect } from 'react-redux';
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
    <td><button className= "button-red" onClick={props.deleteStock.bind(null, props.stock.id)}>Remove</button></td>
    </tr>

  );
};
 
function mapDispatchToProps(dispatch){
  return {deleteStock: (id) => dispatch(deleteStock(id))}
}

export default connect(null, mapDispatchToProps)(Stock)