import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

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
            totalCost: 4
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
        this.setState({
            ingredients: newIngredients,
            totalCost: newCost
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
        this.setState({
            ingredients: newIngredients,
            totalCost: newCost
        })


    };

    render() {
        const disableButtonInfo = {
            ...this.state.ingredients
        };

        for(let key in disableButtonInfo) {
            disableButtonInfo[key] = disableButtonInfo[key] <=0;
        }

        return (
            <Aux>
                <Burger ingredients = { this.state.ingredients }></Burger>
                <BuildControls 
                addIngredient = {this.addIngredientHandler} 
                removeIngredient = {this.removeIngredientHandler}
                disableInfo = {disableButtonInfo}
                price = {this.state.totalCost}
                ></BuildControls>
            </Aux>
        );
    }
};

export default BurgerBuilder;