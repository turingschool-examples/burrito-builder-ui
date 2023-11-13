import { useState } from "react";

function OrderForm(props) {

  console.log("props", props)
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    clearInputs();
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  };

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


  // when i click on lettuce button, i want the value of that button (a string of lettuce) to be added to the state array (ingredients). 

  // code: grab ahold of the button with event.target
  // add event.target to ingredients array with spread operator

  // do i need event.preventDefault()?
  
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        onClick={(e) => {
          console.log("event!", e.target.name)
          e.preventDefault()
          setIngredients([...ingredients, e.target.name])
        }}
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

// ingredients.join(",") takes the ingredients array stored in state? and separates each 
// ingredient at the comma and returns a string.
