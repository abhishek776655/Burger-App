import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle'

const Toolbar = (props)=>{
    
return (
    <header className={classes.Toolbar}>
     
        <SidebarToggle ToggleSidebar = {props.ToggleSidebar}/>
        <div className={classes.Logo}> 
         <Logo/>
        </div>
        <nav className={classes.displayNav}>
        <NavigationItems isAuthenticated= {props.isAuth}/>
        
        </nav>
    </header>
)
}
export default Toolbar;