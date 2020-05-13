import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <SideDrawerToggle clicked = {props.drawerToggleClicked}></SideDrawerToggle>
        <div className = {classes.Logo}>
            <Logo></Logo>
        </div>
        
        <nav className = {classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default toolbar;