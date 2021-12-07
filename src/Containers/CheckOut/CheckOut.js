import React, { Component } from 'react';
import CheckOutSummary from '../../Components/Order/CheckOutSummary/CheckOutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../CheckOut/ContactData/ContactData';
import Payment from '../CheckOut/Payment/Payment';
import { connect } from 'react-redux';

class CheckOut extends Component {
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
                ingredients = {this.props.ingredients}
                checkoutCancelled = {this.checkoutCancelledHandler}
                checkoutContinued = {this.checkoutContinuedHandler}></CheckOutSummary>
                <Route 
                path = {this.props.match.url + "/contact-data"} 
                component = {ContactData}></Route>
                <Route 
                path = {this.props.match.url + "/payment"} 
                component = {Payment}></Route>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalCost
    }
}

export default connect(mapStateToProps)(CheckOut);