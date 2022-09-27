import React,  {Component} from 'react';
import './Orders.css';
import Ingredients from '../App/Ingredients';

class Orders extends Component {
  constructor(props) {
    super(props)
      this.state = {
        orders:[]
      }
  }

orderEls(props) {
  props.orders.map(order => (
   this.setState({orders: 
      <div className="order">
        <h3>{order.name}</h3>
        <Ingredients order={order} />
      </div> 
  })
  ))
}
 render() {
  const orders = this.state.orders
  return (
    <section>
      { this.state.orders.length > 0 ? {orders}: <p>No orders yet!</p> }
    </section>
  )
}
}
export default Orders;