import React, { Component } from 'react';
import './App.css';
import { getOrders } from '../../apiCalls';
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
    getOrders().then(data => {
      this.setState({
        ...this.state,
        orders: data.orders
      })
    })
  }

  addOrder = (name, ingredients) => {
    const id = this.state.orders.length + 1
    const createOrder = {
      id: id,
      name: name,
      ingredients: ingredients
    }
    this.setState({orders:[...this.state.orders, createOrder]})
    if(this.postOrder(createOrder)){
      this.setState({orders:[...this.state.orders, createOrder]})
    }

  }

  postOrder = (order) => {
    fetch('http://localhost:3001/api/v1/orders', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(order)
    })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addOrder}/>
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
