import React, { Component } from 'react'
import classes from './Modal.module.css'
import Backdrop from '../../Components/UI/Backdrop/Backdrop'
import Aux from '../../hoc/Aux'
class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.show!==this.props.show||nextProps.children!==this.props.children){
            return true;
        }
        else{
            return false;
        }

    }
    componentDidUpdate(){
        console.log("ModalWillUpdate")
    }
   render(){
    return (
        <Aux>
            <Backdrop show={this.props.show} ModalClosed={this.props.ModalClosed}/>
        <div className={classes.Modal}
        
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
            
        }}>
        {this.props.children}
        </div>
        </Aux>
    );
    }
}
export default Modal;