import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Sidebar.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
const Sidebar = (props)=>{
    let attachedClasses = [classes.Sidebar,classes.close]
    if(props.show){
        attachedClasses = [classes.Sidebar,classes.open]
    }
    return(
        <Aux>

            <Backdrop show={props.show} ModalClosed={props.ModalClosed}/>
        <div className={attachedClasses.join(" ")} onClick = {props.ModalClosed}>
            <div className={classes.Logo}><Logo/></div>
            <nav>
            <NavigationItems isAuthenticated = {props.isAuth}/>
            </nav>
        </div>
        </Aux>
    );
} 
export default Sidebar;