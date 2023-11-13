import { useState } from "react";
import { postItem } from "../../apiCalls";

function OrderForm({ ingredients, setIngredients, orders, setOrders }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || ingredients.length === 0) {
      alert("Please add a name and select at least one ingredient");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      ingredients,
    };

    postItem(newItem, orders, setOrders);

    clearInputs();
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  }
  function handleButtonClick(e) {
    e.preventDefault();
    setIngredients((prevIngArr) => [...prevIngArr, e.target.value]);
  }

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        value={ingredient}
        onClick={handleButtonClick}
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {ingredientButtons}

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;
