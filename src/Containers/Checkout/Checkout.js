import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from '../Checkout/ContactData/ContactData'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class Checkout extends Component {

    checkoutCanceledHandler = () => {
        this.props.history.push('/')
    }
    checkoutContinuedhandler = () => {
        this.props.history.push('/checkout/contact-data')
    }

    render() {
        let summary = <Redirect to='/' />

        if (this.props.ing.salad !== 0 || this.props.ing.bacon !== 0 || this.props.ing.cheese !== 0 || this.props.ing.meat !== 0) {
            let purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null;
            summary = (<div>
                {purchasedRedirect}
                <CheckoutSummary ingredients={this.props.ing}
                    checkoutCancel={this.checkoutCanceledHandler}
                    checkoutContinue={this.checkoutContinuedhandler} />
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>)
        }

        return summary
    }
}
const mapStateToProps = (state) => {
    return {
        ing: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);