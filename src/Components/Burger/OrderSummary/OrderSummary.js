import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import CustomButton from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('OrderSummary Will Update');
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients).map((item, index) => {
            return (
            <li key = {item + index}>
            <span style = {{textTransform: 'capitalize'}}>{item}</span>: {this.props.ingredients[item]}
            </li>
            )
        })
        return (
            <Aux>
            <h3>Your Order:</h3>
            <p>Your Burger with following Add-ons: </p>
            {ingredientsSummary}
            <br></br>
            <p><strong>Total Cost: {this.props.totalPrice}</strong></p>
            <p>Continue to Checkout?</p>
            <CustomButton buttonType = "Danger" clicked = {this.props.purchaseCancel}>CANCEL</CustomButton>
            <CustomButton buttonType = "Success" clicked = {this.props.purchaseContinue}>CONTINUE</CustomButton>
            </Aux>
        )
    }
};

export default OrderSummary;