import React from 'react';
import classes from './SideDrawerToggle.css';

const sideDrawerToggle =(props) => (
    <div className = {classes.SideDrawerToggle} onClick ={ props.clicked }>
        <div className = {classes.div} ></div>
        <div className = {classes.div}></div>
        <div className = {classes.div}></div>
    </div>
);

export default sideDrawerToggle;