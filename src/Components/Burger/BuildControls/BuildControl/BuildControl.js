import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className = {classes.BuildControl}>
            <div className = {classes.Label}>{props.label}</div>
            <button className = {classes.Less} onClick = {props.removeClicked} disabled = {props.disableButton}>Remove</button>
            <button className = {classes.More} onClick = {props.moreClicked}>Add</button>
        </div>
    )
};

export default buildControl;