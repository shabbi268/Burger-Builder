import React from 'react';
import classes from './Button.css';

const button = (props) => {
    return (
        <button className = {[classes.Button, classes[props.buttonType]].join(' ')}
        disabled = {props.disabled}
        onClick = {props.clicked}>
        {props.children}
        </button>
    )
};

export default button
