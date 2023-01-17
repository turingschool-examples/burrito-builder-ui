import React, { Component } from 'react';
import './App.css';
import { getOrders, submitNewOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [],
      error: '',
    };
  }

  addNewOrder = orderObj => {
    submitNewOrder(orderObj)
    .then(data => {
      this.setState({orders: [...this.state.orders, data]})
    })
    .catch( err => {
      this.setState({error: err})
    })
  }

  componentDidMount() {
    getOrders()
      .then((data) => {
        this.setState({ orders: data.orders });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addNewOrder={this.addNewOrder}/>
        </header>

        <Orders orders={this.state.orders} />
      </main>
    );
  }
}

export default App;
