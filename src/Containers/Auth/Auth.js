import React from 'react'
import { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import classes from './Auth.module.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as action from '../../Store/Action/index'
import CircularProgress from '@material-ui/core/CircularProgress'
class Auth extends Component {
    state = {
        controls: {
            email: {
                placeholder: "Your email",
                value: "",
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touch:false,
            },
            password: {
                placeholder: "password",
                value: "",
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touch:false
            }
        },
        isSignUp: true,
        isValid:false

    }
    checkValidity(value, rules) {
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== ""
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        return isValid;
    }
    changeHandler = (event, identifier) => {
        const updatedControls = {
            ...this.state.controls,}
        const updatedElement = {
            ...updatedControls[identifier]
        }
        updatedElement.value = event.target.value
        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation)
       
        updatedElement.touch = true
        updatedControls[identifier] = updatedElement;
        let isValid = true
        for(identifier in updatedControls){
            isValid = updatedControls[identifier].valid&&isValid
        }
      
       
        this.setState({ controls: updatedControls,isValid:isValid })
        
        
    }
    signInHandler = () => {
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, false)
    }
    signUpHandler = () => {
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, true)
    }
    componentDidMount(){
        if(!this.props.building&&this.props.redirectPath!=='/'){
        this.props.onAuthRedirectPath('/')
        }
    }
    render() {
        let Redirected = null
        if (this.props.isAuth) {
            Redirected = <Redirect to={this.props.redirectPath} />
        }
        
        let form = (<form onSubmit={this.onSubmit}>
            <div className={classes.Textfield}>
                <TextField
                    required
                    fullWidth
                    id="standard"
                    type="email"
                    error={!this.state.controls.email.valid && this.state.controls.email.touch}
                    label= {!this.state.controls.email.valid && this.state.controls.email.touch ? " Error": "Email"} 
                    variant="outlined"
                    helperText = {!this.state.controls.email.valid && this.state.controls.email.touch ? "Entry Required ": null}
                    onChange={(event) => this.changeHandler(event, 'email')}
                />
            </div>
            <div className={classes.Textfield}>
                <TextField
                    required
                    fullWidth
                    id="standard-password-input"
                    error={!this.state.controls.password.valid && this.state.controls.password.touch}
                    label= {!this.state.controls.password.valid && this.state.controls.password.touch ? " Error": "Password"} 
                    variant="outlined"
                    helperText = {!this.state.controls.password.valid && this.state.controls.passwordtouch ? "Entry Required ": null}
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) => this.changeHandler(event, 'password')}
                />
            </div>
        </form>)
        if (this.props.loading) {
            form = <div className={classes.spinner} ><CircularProgress /></div>
        }
        let errorMessage = null
        if (this.props.error) {
            errorMessage = (<p>{this.props.error.message}</p>)
        }
        return (<div className={classes.box}>
            {Redirected}
            {errorMessage}
            {form}
            
            <div className={classes.buttonContainer}>
                <div className={classes.button}>
                    <Button
                        id={classes.btn}
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={!this.state.isValid}
                        onClick={this.signInHandler}
                    >Login</Button>
                </div>
                <div className={classes.button}>
                    <Button
                        id={classes.btn}
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={!this.state.isValid}
                        onClick={this.signUpHandler}
                    >Register</Button>
                </div>
            </div>
        </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        building:state.burgerBuilder.building,
        redirectPath:state.auth.authRedirectPath
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(action.auth(email, password, isSignUp)),
        onAuthRedirectPath:(path)=>dispatch(action.setAuthRedirectionPath(path))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth)