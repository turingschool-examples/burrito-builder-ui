export const getOrders = () => {
  return fetch("http://localhost:3001/api/v1/orders").then((response) =>
    response.json()
  );
};

export async function postItem(newItem, orders, setOrders) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    if (response.ok) {
      console.log("item added");
      setOrders([...orders, newItem]);
    } else {
      throw new Error("Failed to add item");
    }
  } catch (error) {
    console.log(error);
  }
}
