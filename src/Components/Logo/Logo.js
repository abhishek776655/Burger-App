import React from 'react'
import BurgerLogo from '../../assets/Images/27.1 burger-logo.png.png'
import classes from './Logo.module.css'
const Logo = ()=>{
    return (
        <div className={classes.Logo}>
        <img src ={BurgerLogo} alt="BurgurLogo"></img>
        </div>
    );
}
export default Logo;