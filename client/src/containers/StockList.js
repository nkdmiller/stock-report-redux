import React, { Component } from 'react';
import { connect } from 'react-redux'
import Stock from '../components/Stock'
 
class StockList extends Component {
 
  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
 	renderHeader = () => console.log('hi')
 	renderEnd = () => console.log('hi')
  render() {
    return(
      <div>
        {this.renderHeader()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { stockList: state.stocks.stockList };
};
 
export default connect(mapStateToProps) (StockList);