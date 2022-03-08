import React from 'react';
import './Orders.css';

const Orders = props => {
  console.log(props)
  const orderEls = props.orders.map(order => {
    if(order) {
      return (
        <div className="order" key={props.order + '-ord'} >
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              if(ingredient) {
                return <li key={ingredient + '-ing'}>{ingredient}</li>
              }
            })}
          </ul>
        </div>
      )
    }
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;