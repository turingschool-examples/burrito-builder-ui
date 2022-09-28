export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrder = (body) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(data => data)
} 

// export const deleteOrder = (id) => {
//   return fetch(`http://localhost:3001/api/v1/orders${id}`, {
//   method: 'DELETE',
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error ('Sorry it looks like we couldn\'nt delete that')
//     }
//     else {
//       console.log(reponse)
//       return `Order ${id} has been deleted`
//     }
//   })
// }