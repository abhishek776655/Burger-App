import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
 const NavigationItems = (props)=>{
     let Nav = <NavigationItem link="/auth" >Authenticate</NavigationItem>
     if(props.isAuthenticated){
        Nav = <NavigationItem link="/logout" >Logout</NavigationItem>
     }
     return (
         <ul className={classes.NavigationItems}>
             <NavigationItem link="/" exact>Burger Builder</NavigationItem>
             {props.isAuthenticated?<NavigationItem link="/orders" >Orders</NavigationItem>:null}
             {Nav}
         </ul>
     )
 }
 export default NavigationItems;