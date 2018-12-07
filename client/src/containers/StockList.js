import React, { Component } from 'react';
import { connect } from 'react-redux'
import Stock from '../components/Stock'
 
class StockList extends Component {
 
  renderStocks= () => this.props.stockList.map((stock, id) => <Stock key = {id} stock={stock} />)

  render() {
    return(
      <table>
      	<th>
      	<td>Company</td>
      	<td>Symbol</td>
      	<td>Price</td>
      	<td>Change</td>
      	<td>Sector</td>
        {this.renderStocks()}
        </th>
      </table>
    );
  }
};

const mapStateToProps = (state) => {
  return { stockList: state.users.stockList };
};
 
export default connect(mapStateToProps) (StockList);