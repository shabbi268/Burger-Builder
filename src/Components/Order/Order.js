import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];

    for(let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName, 
            amount: props.ingredients[ingredientName]
        })
    }

    const igOutput = ingredients.map(item => {
        return <span key = {item.name}
        style = {{textTransform: 'capitalize',display: 'inline-block', margin: '0 8px', border: '1px solid #ccc', padding: '5px'}}>
        {item.name} {item.amount}
        </span>
    })
    return(
        <div className = {classes.Order}>
            <p>Ingredients: {igOutput}</p>
            <p>Price: <strong>{props.price}</strong></p>
        </div>
    )
}

export default order;