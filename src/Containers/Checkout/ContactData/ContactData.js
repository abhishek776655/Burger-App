import React, { Component } from 'react'
import classes from './ContactData.module.css'
import Spinner from '../../../Components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import { Button, InputLabel, Select, MenuItem, TextField } from '@material-ui/core'
import * as actionType from '../../../Store/Action/index'


class ContactData extends Component {

    state = {
        formIsValid:false,
        formData: {

            name: {
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touch: false

            },
            streetNumber: {
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touch: false
            },
            Pincode: {
                value: "",
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touch: false
            },
            country: {
                value: "",
                validation: {
                    required: true,
                    
                },
                valid: false,
                touch: false

            },
            email: {
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touch: false

            },
            deliveryMethod: {
                value: "fastest",
                valid:true,
                validation:{}
            },
            City: {
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touch: false

            },
            PhoneNumber: {
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touch: false
            },

        }


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
    orderHandler = (e) => {
        e.preventDefault();
        const formData = {}
        for (let formElementIdentifier in this.state.formData) {
            formData[formElementIdentifier] = this.state.formData[formElementIdentifier].value
        }
        const orders = {
            ingredients: this.props.ing,
            price: this.props.price,
            CustomerData: formData,
            userId: this.props.userId
        }
        this.props.purchaseBurger(orders, this.props.token)




    }
    onChangeHandler = (event, idetifier) => {
        const updatedform = { ...this.state.formData }
        const updatedFormelement = {
            ...updatedform[idetifier]
        }
        updatedFormelement.value = event.target.value
        updatedFormelement.valid = this.checkValidity(updatedFormelement.value, updatedFormelement.validation)
        updatedFormelement.touch = true

        updatedform[idetifier] = updatedFormelement;
        let isValid = true
        for(idetifier in updatedform){
            isValid = updatedform[idetifier].valid&&isValid
        }
        console.log(isValid)
        this.setState({ formData: updatedform,formIsValid:isValid})
    }


    render() {

        let form = (
            <form >
                <TextField onChange={(event) => this.onChangeHandler(event, "name")}
                    style={{ margin: 20, display: 'block' ,width:"90%"}}
                    fullWidth
                    id="standard"
                    error={!this.state.formData.name.valid && this.state.formData.name.touch}
                    label= {!this.state.formData.City.valid && this.state.formData.City.touch ? " Error": "Name"} 
                    variant="outlined"
                    helperText = {!this.state.formData.name.valid && this.state.formData.name.touch ? "Entry Required ": null} 
                    name="name"
                    placeholder="Your Name" />
                <TextField onChange={(event) => this.onChangeHandler(event, 'email')}
                    style={{ margin: 20, display: 'block',width:"90%" }}
                    error={!this.state.formData.email.valid && this.state.formData.email.touch}
                    name={!this.state.formData.email.valid && this.state.formData.email.touch ? " Error ": "Email"} 
                    placeholder="Your Email"
                    fullWidth
                    id="standard"
                    helperText = {!this.state.formData.email.valid && this.state.formData.email.touch ? " Entry Required ": null} 
                    label="Email"
                    variant="outlined" />


                <TextField onChange={(event) => this.onChangeHandler(event, "streetNumber")}
                    style={{ margin: 20, display: 'block' ,width:"90%"}}
                    name="street number"
                    error={!this.state.formData.streetNumber.valid && this.state.formData.streetNumber.touch}
                    placeholder="Street Number"
                    fullWidth
                    id="standard"
                    label={!this.state.formData.streetNumber.valid && this.state.formData.streetNumber.touch ? " Error ": "Street Number"}
                    helperText = {!this.state.formData.streetNumber.valid && this.state.formData.streetNumber.touch ? "Entry Required ": null} 
                    variant="outlined" />

                <TextField onChange={(event) => this.onChangeHandler(event, "Pincode")}
                    name="pincode"
                    style={{ margin: 20, display: 'block' ,width:"90%"}}
                    placeholder="Your Pincode"
                    fullWidth
                    error={!this.state.formData.Pincode.valid && this.state.formData.Pincode.touch}
                    id="standard"
                    helperText = {!this.state.formData.Pincode.valid && this.state.formData.Pincode.touch ? "Incorrect Entry or Entry Required ": null} 
                    label={!this.state.formData.Pincode.valid && this.state.formData.Pincode.touch ? " Error ": "Pincode"}
                    variant="outlined" />

                <TextField onChange={(event) => this.onChangeHandler(event, "country")}
                    style={{ margin: 20, display: 'block' ,width:"90%"}}
                    name="Country" placeholder="Country"
                    fullWidth
                    error={!this.state.formData.country.valid && this.state.formData.country.touch}
                    id="standard"
                    helperText = {!this.state.formData.country.valid && this.state.formData.country.touch ? " Entry Required": null} 
                    label={!this.state.formData.country.valid && this.state.formData.country.touch ? " Error ": "Country"}
                    variant="outlined" />

                <TextField onChange={(event) => this.onChangeHandler(event, "City")}
                    style={{ margin: 20, display: 'block' ,width:"90%"}}
                    name="City"
                    placeholder="City"
                    fullWidth
                    error={!this.state.formData.City.valid && this.state.formData.City.touch}
                    id="standard"
                    helperText = {!this.state.formData.City.valid && this.state.formData.City.touch ? " Entry Required": null} 
                    label = {!this.state.formData.City.valid && this.state.formData.City.touch ? " Error ": "City"}
                    variant="outlined" />

                <TextField onChange={(event) => this.onChangeHandler(event, "PhoneNumber")}
                    style={{ margin: 20, display: 'block',width:"90%" }}
                    name="PhoneNumber"
                    placeholder="Phone Number"
                    fullWidth
                    error={!this.state.formData.PhoneNumber.valid && this.state.formData.PhoneNumber.touch}
                    id="standard"
                    helperText = {!this.state.formData.PhoneNumber.valid&& this.state.formData.PhoneNumber.touch ? "Entry Required ": null}
                    label={!this.state.formData.PhoneNumber.valid && this.state.formData.PhoneNumber.touch ? " Error ": "Phone Number"}
                    
                    variant="outlined" />

                <div className={classes.Select}>
                    <InputLabel style={{ textAlign: 'center' }} id="demo-simple-select-label">Delivery Method</InputLabel>
                    <Select fullWidth
                        style={{
                            margin: '15px',
                            width: '50%'
                        }}
                        defaultValue="Fastest"
                        onChange={(event) => this.onChangeHandler(event, "DeliveryMethod")}>
                        <MenuItem value='Fastest'>Fastest</MenuItem>
                        <MenuItem value='Cheapest'>Cheapest</MenuItem>

                    </Select>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    disabled = {!this.state.formIsValid}
                    style={{ margin: '20px' }}
                    size='large'
                    onClick={this.orderHandler}
                >Order
      </Button>

            </form>
            
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h2 >
                    Enter Your Contact Info
                </h2>
                {form}
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        ing: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId


    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        purchaseBurger: (orderData, token) => dispatch(actionType.purchaseBurger(orderData, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactData)