export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Unable to retrieve burritos');
    }
    return response.json();
  });
};
