import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    return (
        <div className = {classes.SideDrawer}>
            <Logo height = "11%"></Logo>
            <nav>
            <NavigationItems></NavigationItems>
            </nav>
        </div>
    );
}

export default sideDrawer;
