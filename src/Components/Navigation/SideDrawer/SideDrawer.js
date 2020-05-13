import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachClasses = [classes.SideDrawer, classes.Close];

    if(props.open) {
        attachClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show = { props.open } clicked = { props.closed }></Backdrop>
            <div className = {attachClasses.join(' ')}>
            <div className = {classes.Logo}>
                <Logo></Logo>
            </div>
            <nav className = {classes.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;
