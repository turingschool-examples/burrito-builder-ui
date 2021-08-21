export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => {
        if(!response.ok) {
            throw Error('Error fetching orders')
        }
        return response.json()
    })
}

export const addOrder = (data) => {
  fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  })
      .then(response => console.log(response))
      .catch(err => console.log(`Add Order Error: ${err.message}`));
}

export const deleteOrder = (id) => {
    fetch(`http://localhost:3001/api/v1/orders${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => console.log(response))
        .catch(err => console.log(`Delete Order Error: ${err.message}`));
}