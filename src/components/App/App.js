import { useEffect, useState } from "react";
import "./App.css";
import { getOrders, postOrder } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(""); 

  const addOrder = (newOrder) => {

    postOrder(newOrder)
      .then((data) => setOrders([...orders, newOrder]))
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getOrders()
      .then((data) => {
        setOrders(data.orders);    
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <main className='App'>
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder} />
      </header>
      <Orders orders={orders} />
    </main>
  );
}

export default App;
