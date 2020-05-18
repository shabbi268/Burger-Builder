import React, { Component } from "react";
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axiosOrders';
import Spinner from '../../../Components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            city: ''
        },
        isLoading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            isLoading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Shabarish Kesa',
                address: {
                    city: 'Cincinnati',
                    state: 'Ohio',
                    zip: '45220'
                },
                email: 'shabarish.shabbi@gmail.com'
            },
            deliveryType: 'fast'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({
                isLoading: false
            })
            this.props.history.push('/');
            console.log(response);
        })
        .catch(err => {
            this.setState({
                isLoading: false
            })
            console.log(err)
        });
        console.log(this.props.ingredients);
    }

    render() {
        let form = (
            <form>
                <input className = {classes.Input} type = "text" name = "name" placeholder = "Enter your name"></input><br></br>
                <input className = {classes.Input} type = "email" name = "email" placeholder = "Enter your Email"></input><br></br>
                <input className = {classes.Input} type = "text" name = "street" placeholder = "Enter the street name"></input><br></br>
                <input className = {classes.Input} type = "text" name = "city" placeholder = "City"></input><br></br>
                <Button 
                buttonType = "Success"
                clicked = {this.orderHandler}>Order</Button>
            </form>
            )
        if (this.state.isLoading) {
            form = <Spinner></Spinner>
        }
        return (
            <div className = {classes.ContactData}>
                <h4>Enter your contact form</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;