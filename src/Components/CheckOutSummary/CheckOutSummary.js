import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckOutSummary.css';

const checkOutSummary = (props) => {
    return (
        <div className = {classes.CheckOutSummary}>
            <h1>Hope you like it!</h1>
            <div style = {{width: '100%', margin: 'auto'}}>
                <Burger ingredients = {props.ingredients}></Burger>
            </div>
            <Button 
            buttonType = "Danger" 
            style = {{color: 'black'}}
            clicked = {props.checkoutCancelled}>Cancel</Button>
            <Button 
            buttonType = "Success"
            clicked = {props.checkoutContinued}>Continue</Button>
        </div>

    )
}

export default checkOutSummary;