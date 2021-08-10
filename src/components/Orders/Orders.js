import React from 'react';
import './Orders.css';

const Orders = ({orders}) => {
  let orderEls;
  if (orders.orders) {
    Object.keys(orders.orders)
    orderEls = orders.orders.map(order => {
      return (
        <div className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li>{ingredient}</li>
            })}
          </ul>
        </div>
      )
    });
  }

  return (
    <section>
      { orderEls ? orderEls : <p>No orders yet!</p>}
    </section>
  )
}

export default Orders;
  