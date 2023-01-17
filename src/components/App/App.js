import React, { Component } from 'react'
import './App.css'
import { getOrders, postOrder, deleteOrderFetch } from '../../apiCalls'
import Orders from '../../components/Orders/Orders'
import OrderForm from '../../components/OrderForm/OrderForm'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      orders: [
        {
          name: '',
          ingredients: [],
        },
      ],
    }
  }

  addOrder = (newOrder) => {
    postOrder(newOrder).then((data) => {
      this.setState({ orders: [...this.state.orders, data] })
    })
  }

  deleteOrder = (id) => {
    console.log('Delete order ID', id)
    const filteredOrders = this.state.orders.filter((order) => order.id !== id)
    // Add API Call to update API
    // I followed the API README directions, but could never find the delete endpoint `/api/v1/orders/:order_id`, even hard-coding the ID and just using the browser and PostMan.
    deleteOrderFetch(id).then((data) => console.log('Data from delete: ', data))
    this.setState(filteredOrders)
  }

  componentDidMount() {
    getOrders()
      .then((data) => {
        const orders = data.orders
        this.setState({ orders })
      })
      .catch((err) => console.error('Error fetching:', err))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addOrder} />
        </header>
        <Orders orders={this.state.orders} deleteOrder={this.deleteOrder} />
      </main>
    )
  }
}

export default App
