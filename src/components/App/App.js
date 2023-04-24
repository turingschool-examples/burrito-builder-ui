import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      orders: []
    })
  }

  componentDidMount() {
    getOrders()
      .then(data=> this.setState(...this.state.orders, data))
      .catch(err => console.error('Error fetching:', err));
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.orders !== prevState.orders)
    // getOrders()
    //   .then(data=> this.setState(...this.state.orders, data))
    //   .catch(err => console.error('Error fetching in update:', err))
  }

  addOrder = (orderObject) => {
    this.setState({orders: [...this.state.orders, orderObject]})
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
