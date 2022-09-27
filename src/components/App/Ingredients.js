import React from 'react'

const Ingredients = ({order}) => {
    const ingredientList = order.map(order => order.ingredients)
    return (
        <ul>
            {ingredientList}
        </ul>
    );
}

export default Ingredients;