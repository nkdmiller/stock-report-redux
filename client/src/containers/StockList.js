import React, { Component } from 'react';
import { connect } from 'react-redux'
import Stock from '../components/Stock'
 
class StockList extends Component {
 
  renderStocks= () => this.props.stockList.map((stock) => <Todo stock={stock} />)

  render() {
    return(
      <div>
        {this.renderStocks()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { stockList: state.stocks.stockList };
};
 
export default connect(mapStateToProps) (StockList);