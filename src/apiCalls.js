export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      } else {
        return response.json();
      }
    });
}

export const postOrder = (order) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      } else {
        return response.json();
      }
    });
}