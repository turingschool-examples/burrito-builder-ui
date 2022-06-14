import React from 'react';
import './Orders.css';
import Order from '../Order/Order'

const Orders = ({ orders }) => {

  const orderEls = orders.map(order => {
    // console.log(props, 'props')
    console.log(order.id)
    return (
      <Order
      id={order.id}
      key={order.id}
      name={order.name}
      ingedients={order.ingedients}
    />
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;