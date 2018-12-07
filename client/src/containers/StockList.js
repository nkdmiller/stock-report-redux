import React, { Component } from 'react';
import { connect } from 'react-redux'
import Stock from '../components/Stock'
import '../Styling.css'
 
class StockList extends Component {
 
  renderStocks= () => this.props.stockList.map((stock, id) => <Stock key = {id} stock={stock} />)

  render() {
    return(
      <table class = "stock-table">
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