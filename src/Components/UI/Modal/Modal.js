import React, { Component } from 'react';
import Classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    };

    UNSAFE_componentWillUpdate() {
        console.log(`Model Component will update`);
    };

    render() {
        return (
            <Aux>
            <Backdrop show = {!this.props.show} clicked = {this.props.closeModal}></Backdrop>
                <div 
                    className = {Classes.Modal}
                    style = {{
                        transform: !this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: !this.props.show ? '1' : '0'
                    }}>
                    { this.props.children }
                </div>
            </Aux>
        )
                }
}

export default Modal;