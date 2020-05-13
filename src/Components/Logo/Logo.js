import React from 'react';
import Logo from '../../assets/images/Logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className = {classes.Logo} style = {{height: props.height}}>
        <img src = {Logo} alt = "myLogo"></img>
    </div>
);

export default logo;