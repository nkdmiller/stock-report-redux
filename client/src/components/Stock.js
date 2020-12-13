import React from 'react';
import { deleteStock } from '../actions/deleteStock'
import { connect } from 'react-redux';
const Stock = props => {

  return (
  	<tr>
  	<td>{props.stock.company_name}</td>
    <td>{props.stock.symbol}</td>
    <td>{props.stock.price}</td>
    <td>{props.stock.sector}</td>
    <td><button className= "button-red" onClick={props.deleteStock.bind(null, props.stock.stock_id)}>Remove</button></td>
    </tr>

  );
};
 
function mapDispatchToProps(dispatch){
  return {deleteStock: (id) => dispatch(deleteStock(id))}
}

export default connect(null, mapDispatchToProps)(Stock)