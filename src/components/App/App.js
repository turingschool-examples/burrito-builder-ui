import React, { Component } from 'react';
import './App.css';
import {getOrders, postOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      error: ''
    }
  }

  componentDidMount() {
    getOrders()
    .catch(error => this.setState({error: 'Cannot get orders right now'}))
    .then(data => {
      this.setState({ orders: data})
        console.log(this.state.orders)
      })
  }

  //body 


  addOrder = (newBitto) => {
    postOrder(newBitto)
    .then(result => {
      if (result.name && result.ingredients.length >= 2) {
        this.setState({ orders: [...this.state.orders.orders, result], error: '' })
      } else {
        this.setState({ error: 'Please enter a name and select at least two ingredients' })
      }
    })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addOrder} />
          {this.state.error && <p className='error-message'>{this.state.error}</p>}
        </header>
        <Orders orders={this.state.orders}/>
        {this.setState.error && <p className='error-message'>{this.state.error}</p>}
      </main>
    );
  }
}


export default App;
