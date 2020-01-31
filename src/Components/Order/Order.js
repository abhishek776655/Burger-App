import React from 'react'
import classes from './Order.module.css'
const Order =(props)=>{

    const ingredients=[];
    for(let ingName in props.ingredients){
        ingredients.push({
            name:ingName,
            value:props.ingredients[ingName]
        })

    }
    const ingredientsComponent = 
        ingredients.map((igKey)=>{
            return <span 
            style={{
                textTransform:"capitalize",
                display:"inline-block",
                margin:'0 8px',
                border:'1px solid #ccc',
                padding:"5px"
            }}
            key={igKey.name}
            >{igKey.name}:{igKey.value} </span>
        })
    
    return(
        <div className={classes.Order}>
    <p>Ingredients: {ingredientsComponent}</p>
    <p>Price <strong>{props.price.toFixed()} Rupees</strong></p>
        </div>
    )
}
export default Order;