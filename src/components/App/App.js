import React, { Component } from 'react';
import './App.css';
import {getOrders, deleteOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    getOrders()
      .then(data => this.setState({ orders: data.orders }))
      .catch(err => console.error('Error fetching:', err));
  }

  handleAddOrder = (newOrder) => {
    this.setState({ orders: [...this.state.orders, newOrder]})
  }

  handleDelete = (id) => {
    deleteOrder(id);
    const filteredOrders = this.state.orders.filter(order => order.id !== id)
    this.setState({ orders: filteredOrders})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm handleAddOrder={this.handleAddOrder}/>
        </header>

        <Orders orders={this.state.orders} handleDelete={this.handleDelete}/>
      </main>
    );
  }
}


export default App;
