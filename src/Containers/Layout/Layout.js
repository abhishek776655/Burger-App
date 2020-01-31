import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import Sidebar from '../../Components/Navigation/Sidebar/Sidebar'
import {connect} from 'react-redux'
class Layout extends Component{
    state={
        showSideBar:false
    }
    BackdropCloseHandler=()=>{
        this.setState({showSideBar:false})
    }
    SideBarToggle=()=>{
       
        this.setState((prevState)=>{
            return {showSideBar:!prevState.showSideBar}
    })
    
}
    render(){
        
       return( <Aux>
           <Toolbar isAuth={this.props.isAuthenticated}ToggleSidebar={this.SideBarToggle}/>
            <Sidebar  isAuth={this.props.isAuthenticated} show = {this.state.showSideBar} ModalClosed={this.BackdropCloseHandler}/>
     <main className={classes.Content}>
         {this.props.children}
     </main>
     </Aux>
       )}
}
const mapStateToProps = (state)=>{
    return{
        isAuthenticated:state.auth.token!==null
    }
}
export default connect(mapStateToProps)(Layout);