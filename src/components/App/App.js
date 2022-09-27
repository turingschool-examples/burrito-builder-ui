import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';
import Ingredients from './Ingredients'
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        orders: []
      }
  }


  componentDidMount() {
    getOrders()
      .then(data => {
        this.setState({orders:[...this.state.orders, data]})
      })
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm />
        </header>
        {this.state.orders.length > 0 ? <Orders orders={this.state.orders} /> : <p>No orders yet!</p> }
      </main>
    );
  }
}


export default App;
