import React from 'react'

const Ingredients = ({order}) => {
    const ingredientList = order.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
    return (
        <ul>
            {ingredientList}
        </ul>
    );
}

export default Ingredients;