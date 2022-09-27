// import { getAllByText } from "@testing-library/react";

export const getOrders = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/orders' );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('error', error);
  }
};


// export const getOrders  = (id, name, ingredients) => {
//   return fetch(`http://localhost:3001/api/v1/orders`,{
//        method: "POST",
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify({id: id, name: name, ingredients: ingredients}),
//      })
//    .then((response) => response.json())
//  }

// fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }