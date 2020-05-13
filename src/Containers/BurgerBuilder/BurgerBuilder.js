import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

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
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalCost: 4,
            totalIngredientsCount: 0,
            showModal: false
        }
    };

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
    }

    render() {
        const disableButtonInfo = {
            ...this.state.ingredients
        };

        for(let key in disableButtonInfo) {
            disableButtonInfo[key] = disableButtonInfo[key] <=0;
        }

        return (
            <Aux>
                {this.state.showModal ? 
                <Modal closeModal = {this.closeModalHandler}>
                    <OrderSummary 
                    ingredients = {this.state.ingredients}
                    show = {this.state.showModal}>
                    </OrderSummary>
                </Modal> : null}
                <Burger ingredients = { this.state.ingredients }></Burger>
                <BuildControls 
                addIngredient = {this.addIngredientHandler} 
                removeIngredient = {this.removeIngredientHandler}
                disableInfo = {disableButtonInfo}
                price = {this.state.totalCost}
                ingCount = {this.state.totalIngredientsCount}
                checkoutClicked = {this.checkoutHandler}></BuildControls>
            </Aux>
        );
    }
};

export default BurgerBuilder;