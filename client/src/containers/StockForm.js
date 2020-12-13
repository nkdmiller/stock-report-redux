import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/fetchStocks'
import { addStock } from '../actions/addStock'
class StockForm extends Component {
  state = {
    sym: "" 
  }

  onHandleChange = event => {
    
    this.setState({
        sym: event.target.value
    });

  };

  onHandleSubmit = event => {
      event.preventDefault();
      console.log(this.state.sym)
      this.props.addStock(this.state.sym)
      this.props.fetchStocks()
    }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      this.onHandleSubmit(event)
    }
  }

  render() {
    return (
      <div>
        <h1>Search for Stock by Symbol</h1>
        <div className="stock-form-body">
          <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress} id="signup-form">
            <input id="sym" name="sym" placeholder="(msft, snap, fb...)" value={this.state.sym} onChange={this.onHandleChange} />
            <button className = 'logout'>Search</button>
          </form>
        </div>
        </div>
      )
  }
}

function mapDispatchToProps(dispatch){
  return { fetchStocks: () => dispatch(fetchStocks()), addStock: (sym) => dispatch(addStock(sym)) }
}

const mapStateToProps = (state) => {
  return { stocks: state.stocks.stocks };
};
 
export default connect(mapStateToProps, mapDispatchToProps) (StockForm);