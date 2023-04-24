export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const giveOrder = (postObject) => {
  const postDetails = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postObject)
  }

  return fetch('http://localhost:3001/api/v1/orders', postDetails)
        .then(response => response.json())
}