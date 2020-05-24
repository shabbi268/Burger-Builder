import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
// import axios from '../../axiosOrders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/actions';

class BurgerBuilder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            isLoading: false
        }
    };

    componentDidMount() {
        console.log(this.props);
        // axios.get('https://burger-builder-react-app-a3a48.firebaseio.com/ingredients.json')
        // .then((response) => {
        //     this.setState({
        //         ingredients: response.data
        //     })
        // })
        // .catch(error => {
        //     console.log(error);
        // });
    }

    addIngredientHandler = (type) => {
        // NO MORE SUING SINCE REDUX
        // const currentValue = this.state.ingredients[type];
        // const updatedValue = currentValue + 1;
        // const newIngredients = {
        //     ...this.state.ingredients
        // };
        // newIngredients[type] = updatedValue;
        // const addCost = INGREDIENT_PRICES[type];
        // const oldCost = this.state.totalCost;
        // const newCost = oldCost + addCost;
        // const newTotalIngCount = this.props.totalIngredientsCount + 1;
        // this.setState({
        //     ingredients: newIngredients,
        //     totalCost: newCost,
        //     totalIngredientsCount: newTotalIngCount
        // })
    };

    removeIngredientHandler = (type) => {
        // NO MORE USING SINCE REDUX
        // const currentValue = this.state.ingredients[type];
        // const updatedValue = currentValue - 1;
        // const newIngredients = {
        //     ...this.state.ingredients
        // };
        // newIngredients[type] = updatedValue;
        // const removeCost = INGREDIENT_PRICES[type];
        // const oldCost = this.state.totalCost;
        // const newCost = oldCost - removeCost;
        // const newTotalIngCount = this.state.totalIngredientsCount - 1;
        // this.setState({
        //     ingredients: newIngredients,
        //     totalCost: newCost,
        //     totalIngredientsCount: newTotalIngCount
        // })
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
        this.props.history.push('checkout');
    };

    render() {
        const disableButtonInfo = {
            ...this.props.ingredients
        };

        let orderSummary = null;

        if(this.state.isLoading) {
            orderSummary = <Spinner></Spinner>
        }

        for(let key in disableButtonInfo) {
            disableButtonInfo[key] = disableButtonInfo[key] <=0;
        }
        let burger = <Spinner></Spinner>

        if(this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients = { this.props.ingredients }></Burger>
                    <BuildControls 
                    addIngredient = {this.props.onIngredientAdd} 
                    removeIngredient = {this.props.onIngredientRemove}
                    disableInfo = {disableButtonInfo}
                    price = {this.props.totalCost}
                    ingCount = {this.props.totalIngredientsCount}
                    checkoutClicked = {this.checkoutHandler}></BuildControls>
                </Aux>
            )
            orderSummary = (
                <OrderSummary 
                    ingredients = {this.props.ingredients}
                    show = {this.state.showModal}
                    purchaseCancel = {this.closeModalHandler}
                    purchaseContinue = {this.continuePurchaseHandler}
                    totalPrice = {this.props.totalCost}>
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

const mapStateToProps = (state) => {
    return{
        ingredients: state.ingredients,
        totalCost: state.totalCost,
        totalIngredientsCount: state.totalIngredientsCount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdd: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemove: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);