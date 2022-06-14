import React, { Component } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [],
      fetchError: false,
    };
  }

  saveOrder = (newOrder) => {
    this.setState({ orders: [...this.state.orders, newOrder]})
  }

  getOrders = async () => {
    const response = await fetch("http://localhost:3001/api/v1/orders");
    if (response.ok) {
      var data = await response.json();
      this.setState({ orders: data.orders });
    } else {
      throw Error(response)
    }
  };

  componentDidMount = () => {
    this.getOrders().catch(err => {
      console.error("Error fetching:", err);
      this.setState({ orders: [], fetchError: true})
    });
  };

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm saveOrder={this.saveOrder}/>
        </header>

        <Orders orders={this.state.orders} />
      </main>
    );
  }
}

export default App;
