import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          name: 'Christine',
          ingredients: ['beans', 'steak', 'carnitas']
        }
      ]
    }
  }

  componentDidMount() {
    getOrders()
      .catch(err => console.error('Error fetching:', err));
  }

  addOrder = (newOrder) => {
    this.setState({ orders: [this.state.orders, newOrder]})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          {console.log(this.props)}
          <OrderForm addOrder={this.addOrder}/>
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
