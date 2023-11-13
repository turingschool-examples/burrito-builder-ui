import { useEffect, useState } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {

const [orders, setOrders] = useState([]) //orders is an array
const [error, setError] = useState("") //error will be a string

  useEffect(() => {
    getOrders()
    .then((data) => {
      console.log("GET data", data)
      setOrders(data.orders) //data is an object, need to do data.orders to get the orders array.
      console.log("data.orders:=====", data.orders);
    })
    .catch((error) => console.error("Error fetching", error));
  }, []);

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;

