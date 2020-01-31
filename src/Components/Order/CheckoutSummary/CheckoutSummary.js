import React from 'react'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'
import Burger from '../../Burger/Burger'

const CheckoutSummary =(props)=>{
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We Hope You like this Burger</h1>
            <div style={{width:"100%"}}>
            <Burger ingredients={props.ingredients}/>
            </div>
            <Button type="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
            <Button type="Success" clicked={props.checkoutContinue}>CONTINUE</Button>

        </div>
    );}
    export default  CheckoutSummary;


