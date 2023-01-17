const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders').then((response) =>
    response.json()
  )
}

const postOrder = (newOrder) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}

const deleteOrderFetch = (id) => {
  return fetch(`http://localhost:3001/api/v1/:1`, {
    method: 'DELETE',
  }).then((response) => response.json())
}

export { getOrders, postOrder, deleteOrderFetch }
