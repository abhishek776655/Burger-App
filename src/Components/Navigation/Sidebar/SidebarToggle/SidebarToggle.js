import React from 'react'
import classes from './SidebarToggle.module.css'
const SidebarToggle = (props)=>{
    return(
        <div className={classes.DrawerToggle} onClick= {props.ToggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
            </div>
    )
}
export default SidebarToggle;