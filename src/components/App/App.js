import { useEffect, useState } from "react";
import "./App.css";
import { getOrders, postOrder } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orders, setOrders] = useState([]); //orders is an array
  const [error, setError] = useState(""); //error will be a string

  const addOrder = (newOrder) => {
    console.log("newOrder:=====", newOrder);
    postOrder(newOrder)
      .then((data) => setOrders([...orders, data]))
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getOrders()
      .then((data) => {
        console.log("GET data", data);
        setOrders(data.orders); //data is an object, need to do data.orders to get the orders array.
        console.log("data.orders:=====", data.orders);
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
