import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'
const OrderSummary = (props)=>{
    const ingredientsSummary = Object.keys(props.ingredients)
    .map((igKey)=>{
    return <li key={igKey}> <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
    })
    return (
        <Aux>
        <h3>Your Order</h3>
        <p>A Burger With following Ingredients</p>
        <ul>
            {ingredientsSummary}
        </ul>
    <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button type="Danger" clicked={props.Cancel}>CANCEL</Button>
        <Button type="Success" clicked={props.Continue}>CONTINUE</Button>
        </Aux>
    );
}
export default OrderSummary;