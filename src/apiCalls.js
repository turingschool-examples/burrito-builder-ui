
export const getOrders = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/orders' );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('error', error);
  }
};


// export const getOrders  = (orders) => {
//   return fetch(`http://localhost:3001/api/v1/orders`,{
//        method: "POST",
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify({orders: orders}),
//      })
//    .then((response) => response.json())
//  }