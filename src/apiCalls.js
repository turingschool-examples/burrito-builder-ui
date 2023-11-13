export const getOrders = () => {
  return fetch("http://localhost:3001/api/v1/orders").then((response) => response.json());
};

export const postNewOrder = (newOrder) => {
  return fetch("http://localhost:3001/api/v1/orders", {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if(response.ok) {
      return response
    } else {
      throw new Error(`${response.status} ${response.statusText}. Something went wrong submitting your order. Please try again.`)
    }
  })
  .then(response => response.json())
}