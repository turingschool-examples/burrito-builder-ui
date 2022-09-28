import React from 'react';
import './Orders.css';
import Ingredients from '../App/Ingredients';

const Orders = ({orders}) => {
const orderz = orders[0].orders
  return (
    <section>
     { orders.length > 0 ? 
        orderz.map(order => {
          return (
            <div className="order" key={order.id}>
              <h3>{order.name}</h3>
              <ul><Ingredients order={order}/></ul>
            </div>
          )}
      )
      : <p>No orders yet!</p> }
    </section>
  )
}
  

export default Orders;