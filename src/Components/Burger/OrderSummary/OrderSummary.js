import React from 'react';
import Aux from '../../../hoc/Aux';
import CustomButton from '../../UI/Button/Button';

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
            <p><strong>Total Cost: {props.totalPrice}</strong></p>
            <p>Continue to Checkout?</p>
            <CustomButton buttonType = "Danger" clicked = {props.purchaseCancel}>CANCEL</CustomButton>
            <CustomButton buttonType = "Success" clicked = {props.purchaseContinue}>CONTINUE</CustomButton>
        </Aux>
    )
};

export default orderSummary;