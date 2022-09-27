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
        orders: [],
        newOrder: {
          
        }
      }
  }
  componentDidMount() {
    getOrders()
      .then(data => {
        this.setState({orders:[...this.state.orders, data]})
      })
      .catch(err => console.error('Error fetching:', err));
  }
  // handleIngredientChange = (e) =>  {
  //   e.preventDefault()
  //   this.setState({ newOrder: [...this.state.newOrder, e.target.value]})
  // }

  // handleNameChange = (name) => {
  //   this.setState({ newOrder: [...this.state.newOrder.name, name]})
  // }

  handleOrder = (order) => {

  this.setState({newOrder: order})
  }

  

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm handleOrder={this.handleOrder}/>
        </header>
        {this.state.orders.length > 0 ? <Orders orders={this.state.orders} /> : <p>No orders yet!</p> }
      </main>
    );
  }
}


export default App;
