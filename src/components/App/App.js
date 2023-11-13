import { useState, useEffect } from "react";
import "./App.css";
import { getOrders, postNewOrder} from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";


function App() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders() 
    .then(data => {
      // console.log("orders in useEffect", orders.orders)
      setOrders(data.orders)
    })
    .catch((err) => console.error("Error fetching:", err));
  }, []);
  
  const addNewOrder = (newOrder) => {
    postNewOrder(newOrder)
    .then(newOrderData => {
      // console.log("new order data", newOrderData)
      // console.log("orders inside AddNewOrder", orders)
      setOrders([...orders, newOrderData])
    })
    .catch(error => console.log(error))
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addNewOrder={addNewOrder} />
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;
