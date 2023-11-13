import { useEffect, useState } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getOrders()
      .then((data) => {
        setOrders(data.orders);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setLoading(false);
      });
  }, [ingredients]);

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm
          ingredients={ingredients}
          setIngredients={setIngredients}
          orders={orders}
          setOrders={setOrders}
        />
      </header>

      {loading ? <p>Loading...</p> : <Orders orders={orders} />}
    </main>
  );
}

export default App;
