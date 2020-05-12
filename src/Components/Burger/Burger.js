import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // let iArray = [];
    let  transformedIngredients = Object.keys(props.ingredients)
    .map(item => {
        return [...Array(props.ingredients[item])].map((_, index) => {
            // iArray.push(item);
            // console.log(item, _, index);
            return <BurgerIngredient key = {item + index} type = {item}></BurgerIngredient>
        })
    })
    .reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding your Ingredients</p>
    }
    // console.log(`transformedIngredients`,transformedIngredients);
    // console.log(`iArray`,iArray);
    // const bIngredients = iArray.map( (element, index) => {
    //     return <BurgerIngredient key = {element + index} type = {element}></BurgerIngredient>
    // })

    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type = "bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom"></BurgerIngredient>
            {/* <BurgerIngredient type = "bread-top"></BurgerIngredient>
            {bIngredients}
            <BurgerIngredient type = "bread-bottom"></BurgerIngredient> */}
        </div>
    );
};

export default burger;