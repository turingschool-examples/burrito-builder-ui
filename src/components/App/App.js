import React, { Component } from 'react';
import './App.css';
import {getOrders, postOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [{
        name: 'Justen',
        ingredients: 
        ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'],
      }]
    }
  }

  addOrder = newOrder => {
    console.log("New order", newOrder)
    
    postOrder(newOrder)
      .then(data => {
        console.log('Data from post: ', data)
        this.setState({ orders: [...this.state.orders, data]})
      })
// Fix this //
  }

  componentDidMount() {
    getOrders()
    .then(data => {
      const orders = data.orders
      this.setState({ orders })
    })
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={ this.addOrder }/>
        </header>
        <Orders orders={this.state.orders} id={ Date.now() } />
      </main>
    );
  }
}


export default App;
