import React from 'react';
const StockShow = props => {
  return (
    <table className="stock-table">
    <thead>
      <tr>
      <th>Company</th>
      <th>Symbol</th>
      <th>Price</th>
      <th>Sector</th>
      </tr>
    </thead>
    <tbody>
    	<tr>
    	<td>{props.props.stock.company_name}</td>
      <td>{props.props.stock.symbol}</td>
      <td>{props.props.stock.price}</td>
      <td>{props.props.stock.sector}</td>
      </tr>
    </tbody>
    </table>
  );
};
 
export default StockShow;