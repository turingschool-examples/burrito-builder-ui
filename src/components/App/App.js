import React, { useEffect, useState } from 'react';
import './App.css';
import { getOrders, postOrder } from '../../apiCalls'
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [orderAdded, setOrderAdded] = useState(false)

  useEffect(() => {
    getOrders()
      .then(data => setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }, []);

  useEffect(() => {
    if (orderAdded) {
      getOrders()
      .then(data => setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));

      setOrderAdded(false);
    }
  }, [orderAdded]);

  const addOrder = newOrder => {
    postOrder(newOrder)
    .then(setOrderAdded(true))
    .catch(err => console.error('Error fetching:', err));
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder} />
      </header>

      <Orders orders={orders}/>
    </main>
  );
}


export default App;
