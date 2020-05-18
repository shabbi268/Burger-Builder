import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axiosOrders';
import Spinner from '../../Components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    cheese: 0.5,
    bacon: 0.75,
    salad: 0.5,
    meat: 1
}

class BurgerBuilder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            totalCost: 4,
            totalIngredientsCount: 0,
            showModal: false,
            isLoading: false
        }
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('https://burger-builder-react-app-a3a48.firebaseio.com/ingredients.json')
        .then((response) => {
            this.setState({
                ingredients: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    addIngredientHandler = (type) => {
        const currentValue = this.state.ingredients[type];
        const updatedValue = currentValue + 1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = updatedValue;
        const addCost = INGREDIENT_PRICES[type];
        const oldCost = this.state.totalCost;
        const newCost = oldCost + addCost;
        const newTotalIngCount = this.state.totalIngredientsCount + 1;
        this.setState({
            ingredients: newIngredients,
            totalCost: newCost,
            totalIngredientsCount: newTotalIngCount
        })
    };

    removeIngredientHandler = (type) => {
        const currentValue = this.state.ingredients[type];
        const updatedValue = currentValue - 1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = updatedValue;
        const removeCost = INGREDIENT_PRICES[type];
        const oldCost = this.state.totalCost;
        const newCost = oldCost - removeCost;
        const newTotalIngCount = this.state.totalIngredientsCount - 1;
        this.setState({
            ingredients: newIngredients,
            totalCost: newCost,
            totalIngredientsCount: newTotalIngCount
        })
    };

    checkoutHandler = () => {
        this.setState({
            showModal: true
        });
    };

    closeModalHandler = () => {
        this.setState({
            showModal: false
        });
    };

    continuePurchaseHandler = () => {
        // this.setState({
        //     isLoading: true
        // })
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalCost,
        //     customer: {
        //         name: 'Shabarish Kesa',
        //         address: {
        //             city: 'Cincinnati',
        //             state: 'Ohio',
        //             zip: '45220'
        //         },
        //         email: 'shabarish.shabbi@gmail.com'
        //     },
        //     deliveryType: 'fast'
        // }
        // axios.post('/orders.json', order)
        // .then(response => {
        //     this.setState({
        //         isLoading: false
        //     })
        //     console.log(response);
        // })
        // .catch(err => {
        //     this.setState({
        //         isLoading: false
        //     })
        //     console.log(err)
        // });
        // alert("Can Continue!");
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        };
        queryParams.push('price=' + this.state.totalCost)
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };

    render() {
        const disableButtonInfo = {
            ...this.state.ingredients
        };

        let orderSummary = null;

        if(this.state.isLoading) {
            orderSummary = <Spinner></Spinner>
        }

        for(let key in disableButtonInfo) {
            disableButtonInfo[key] = disableButtonInfo[key] <=0;
        }
        let burger = <Spinner></Spinner>

        if(this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients = { this.state.ingredients }></Burger>
                    <BuildControls 
                    addIngredient = {this.addIngredientHandler} 
                    removeIngredient = {this.removeIngredientHandler}
                    disableInfo = {disableButtonInfo}
                    price = {this.state.totalCost}
                    ingCount = {this.state.totalIngredientsCount}
                    checkoutClicked = {this.checkoutHandler}></BuildControls>
                </Aux>
            )
            orderSummary = (
                <OrderSummary 
                    ingredients = {this.state.ingredients}
                    show = {this.state.showModal}
                    purchaseCancel = {this.closeModalHandler}
                    purchaseContinue = {this.continuePurchaseHandler}
                    totalPrice = {this.state.totalCost}>
                </OrderSummary>
            )
        };

        if(this.state.isLoading) {
            orderSummary = <Spinner></Spinner>
        }

        return (
            <Aux>
                {this.state.showModal ? 
                <Modal closeModal = {this.closeModalHandler}>
                    {orderSummary}
                </Modal> : null}
                {burger}
            </Aux>
        );
    }
};

export default BurgerBuilder;