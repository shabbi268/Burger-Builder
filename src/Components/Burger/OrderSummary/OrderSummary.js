import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((item, index) => {
        return (
        <li key = {item + index}>
        <span style = {{textTransform: 'capitalize'}}>{item}</span>: {props.ingredients[item]}
        </li>
        )
    })
    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>Your Burger with following Add-ons: </p>
            {ingredientsSummary}
            <br></br>
            <p>Continue to Checkout?</p>
        </Aux>
    )
};

export default orderSummary;