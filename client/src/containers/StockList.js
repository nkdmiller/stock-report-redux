import React, { Component } from 'react';
import { connect } from 'react-redux'
import Stock from '../components/Stock'
import '../Styling.css'
 
class StockList extends Component {
 
  renderStocks= () => this.props.stockList.map((stock, id) => <Stock key = {id} stock={stock} />)

  render() {
    return(
      <table className = "stock-table">
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
        {this.renderStocks()}
        </tbody>
      </table>
    );
  }
};

const mapStateToProps = (state) => {
  return { stockList: state.users.stockList };
};
 
export default connect(mapStateToProps) (StockList);