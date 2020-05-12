import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const buildControls = (props) => {
    const controlsArray = [
        {label: "Salad", type: "salad"},
        {label: "Cheese", type: "cheese"},
        {label: "Bacon", type: "bacon"},
        {label: "Meat", type: "meat"}
    ];
    return (
        <div className = {classes.BuildControls}>
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controlsArray.map(control => (
                <BuildControl 
                key = {control.label} 
                label = {control.label} 
                type = {control.type} 
                moreClicked = { () => props.addIngredient(control.type)}
                removeClicked = { () => props.removeIngredient(control.type) }
                disableButton = {props.disableInfo[control.type]} ></BuildControl>
            ))}
            <br></br>
            <button 
            className = {classes.OrderButton} 
            disabled = {props.ingCount > 0 ? false : true}
            onClick = {props.checkoutClicked}>
            Check Out
            </button>
        </div>
    )
};

export default buildControls;
