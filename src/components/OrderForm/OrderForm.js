import { useState } from "react";

function OrderForm( {addOrder} ) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.length || !ingredients.length) {
      setErrorMessage(
        "Form is incomplete. All fields need to be filled in or selected before submission."
      );
      return;
    }
    const newOrder = {
      id: Date.now(),
      name,
      ingredients
    }
    addOrder(newOrder);
    clearInputs();
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
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
        onClick={
          (event) => {
            event.preventDefault();
            setIngredients([...ingredients, event.target.name]);
          }
        }
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
      />

      {ingredientButtons}

      <p>Order: {ingredients.join(" ") || "Nothing selected"}</p>

      <button type='submit'>Submit Order</button>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
    </form>
  );
}

export default OrderForm;
