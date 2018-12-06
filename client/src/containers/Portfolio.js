import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks'
class Portfolio extends Component {
  handleOnClick = () => {
    this.props.fetchStocks('appl')
  }
  render() {
    return (
      <div className="Portfolio">
      <button onClick={this.handleOnClick} />
        <p>{this.props.stocks}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchStocks: () => dispatch(fetchStocks()) }
}

const mapStateToProps = (state) => {
  return { stocks: state.stocks.stocks };
};
 
export default connect(mapStateToProps, mapDispatchToProps) (Portfolio);