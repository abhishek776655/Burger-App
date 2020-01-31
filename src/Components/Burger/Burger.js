import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const Burger = (props)=>{
    let tranformedIngredients = Object.keys(props.ingredients)
    .map((igKey)=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredients key={igKey+i} type ={igKey} />;
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[])
   if(tranformedIngredients.length===0){
        tranformedIngredients=<p>Please add Ingredients</p>
   }
return (
    <div className = {classes.Burger}>
        <BurgerIngredients type ="bread-top"/>
       {tranformedIngredients}
        <BurgerIngredients type ="bread-bottom"/>
    </div>
);

};
export default Burger;