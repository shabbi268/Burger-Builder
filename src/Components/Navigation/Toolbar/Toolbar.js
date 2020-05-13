import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div>MENU</div>
        <Logo height = "80%"></Logo>
        <nav className = {classes.nav}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default toolbar;