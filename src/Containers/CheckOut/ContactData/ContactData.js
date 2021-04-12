import React, { Component } from "react";
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axiosOrders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';
import {connect} from 'react-redux';
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    isRequired: true
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your City'
                },
                value: '',
                validation: {
                    isRequired: true
                },
                valid: false,
                touched: false
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your State'
                },
                value: '',
                validation: {
                    isRequired: true
                },
                valid: false,
                touched: false
            },
            zip: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: '',
                validation: {
                    isRequired: true,
                    minLength: 4,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    isRequired: true
                },
                valid: false,
                touched: false
            },
            deliveryType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Fast', displayValue: 'Fast'},
                        {value: 'Normal', displayValue: 'Normal'},
                        {value: 'Premium', displayValue: 'Premium'}
                    ]
                },
                value: '',
                validation: {

                },
                valid: true
            }
        },
        formIsValid: false
    };

    checkValidity = (value, rules) => {
        let isValid = true;
        if(rules.isRequired) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    };

    orderHandler = async (event) => {
        event.preventDefault();
        this.setState({
            isLoading: true
        })
        const formData = {};
        for(let identifier in this.state.orderForm) {
            formData[identifier] = this.state.orderForm[identifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
            customer: {
                name: this.state.orderForm.name.value,
                address: {
                    city: this.state.orderForm.city.value,
                    state: this.state.orderForm.state.value,
                    zip: this.state.orderForm.zip.value
                },
                email: this.state.orderForm.email.value
            },
            deliveryType: this.state.orderForm.deliveryType.value
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
    };

    changeHandler = (event, identifier) => {
        const array1 = {...this.state.orderForm}; // orderform - elements= name, email....
        const array2 = {...array1[identifier]}; // orderform[key] - elements = elementType, elementConfig...
        array2.value = event.target.value;
        array2.valid = this.checkValidity(array2.value, array2.validation);
        array2.touched = true;
        let formIsValid = true;
        for( let identifier in array1) {
            formIsValid = array1[identifier].valid && formIsValid
        }
        array1[identifier] =  array2;
        this.setState({
            orderForm: array1,
            formIsValid: formIsValid
        })
    };

    

    render() {
        let formElementsArray = [];
        for(let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                elementConfig: this.state.orderForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(element => {
                    return <Input key = {element.id}
                    valid = {!element.elementConfig.valid}
                    elementType = {element.elementConfig.elementType} 
                    elementConfig = {element.elementConfig.elementConfig} 
                    value = {element.elementConfig.value}
                    touched = {element.elementConfig.touched}
                    shouldValidate = {element.elementConfig.validation}
                    inputChanged = {(event) => this.changeHandler(event, element.id)}>
                    </Input>
                })}
                <Button 
                buttonType = "Success"
                disabled = {!this.state.formIsValid}
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
};

const mapStateToProps =(state) => {
    return{
        ingredients: state.ingredients,
        price: state.totalCost
    }
}

export default connect(mapStateToProps)(ContactData);