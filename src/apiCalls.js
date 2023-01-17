export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders').then((response) => {
    if (!response.ok) {
      throw new Error('Unable to retrieve burritos');
    }
    return response.json();
  });
};

export const submitNewOrder = (newOrder) => {
  const url = 'http://localhost:3001/api/v1/orders';
  const options = {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to add new order. Error: ${response.statusText}`);
    } else if (response.status === 201) {
      return response.json();
    }
  });
};
