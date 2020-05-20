import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement]
    if(props.valid && props.touched && props.shouldValidate) {
        inputClasses.push(classes.Invalid)
    }

    switch(props.elementType) {
        case('input'):
            inputElement = 
            <input className = {inputClasses.join(' ')} 
            {...props.elementConfig} 
            value = {props.value}
            onChange = {props.inputChanged}>
            </input>;
            break;
        case('textarea'):
            inputElement = 
            <textarea className = {inputClasses.join(' ')} 
            {...props.elementConfig} 
            value = {props.value}
            onChange = {props.inputChanged}>
            </textarea>;
            break;
        case('select'):
            inputElement = (
            <select className = {classes.InputElement}  
            value = {props.value}
            onChange = {props.inputChanged}>
                {props.elementConfig.options.map(option => {
                    return (<option key = {option.value} 
                        value = {option.value}>
                        {option.displayValue}
                        </option>)
                })}
            </select>
            );
            break;
        default:
            inputElement = 
            <input className = {inputClasses.join(' ')}
            {...props.elementConfig} 
            value = {props.value}
            onChange = {props.inputChanged}>
            </input>
    }
    return(
        <div className = {classes.Input}>
            <label className = {classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;