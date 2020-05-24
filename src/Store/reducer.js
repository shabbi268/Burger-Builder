import * as actionTypes from './actions';

const INGREDIENT_PRICES = {
    cheese: 0.5,
    bacon: 0.75,
    salad: 0.5,
    meat: 1
}

const initialState = {
    ingredients: {
        salad: 0,
        meat: 0,
        cheese: 0,
        bacon: 0
    },
    totalCost: 4,
    totalIngredientsCount: 0

}

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalIngredientsCount: state.totalIngredientsCount + 1,
                totalCost: state.totalCost + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalIngredientsCount: state.totalIngredientsCount - 1,
                totalCost: state.totalCost - INGREDIENT_PRICES[action.ingredientName]
            }
        default:
            return state;
    }

}

export default myReducer;