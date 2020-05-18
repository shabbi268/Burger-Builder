import React, { Component } from 'react';
import CheckOutSummary from '../../Components/CheckOutSummary/CheckOutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../CheckOut/ContactData/ContactData';

class CheckOut extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()) {
            if(param[0] === 'price') {
                price = +param[1]
            } else {
                ingredients[param[0]] = +param[1];
            }


            // console.log(param);
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckOutSummary 
                ingredients = {this.state.ingredients}
                checkoutCancelled = {this.checkoutCancelledHandler}
                checkoutContinued = {this.checkoutContinuedHandler}></CheckOutSummary>
                <Route 
                path = {this.props.match.url + "/contact-data"} 
                render = {(props) => (<ContactData ingredients = {this.state.ingredients} price = {this.state.price} {...props}></ContactData>)}></Route>
            </div>
        )
    }
}

export default CheckOut;