import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    toggleSideDrawerHandler = () => {
        let oldValue = this.state.showSideDrawer
        this.setState({
            showSideDrawer: !oldValue
        })
    };

    render() {
        return (
            <Aux>
            <Toolbar drawerToggleClicked = {this.toggleSideDrawerHandler}></Toolbar>
            <SideDrawer closed = {this.toggleSideDrawerHandler} open = {this.state.showSideDrawer}></SideDrawer>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className = {classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        )
    }
    
};

export default Layout;