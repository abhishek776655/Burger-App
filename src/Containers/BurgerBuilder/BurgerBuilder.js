import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger'
import BurgerControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../Modal/Modal'
import OrderSumary from '../../Components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../Components/UI/Spinner/Spinner'
import * as BurgerBuilderAction from '../../Store/Action/index'
import { connect } from 'react-redux'

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false
    }


    updatePurchaseable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)

        return sum > 0

    }


    purchasingHander = () => {
        if (this.props.isAuth) {
            this.setState({ purchasing: true });
        }
        else {
            this.props.onAuthRedirectPath('/checkout')
            this.props.history.push('/auth')
        }
    }
    ModalCloseHandler = () => {
        this.setState({ purchasing: false })

    }
    purchaseContinueHandler = () => {
        this.props.onPurchasedInit()
        this.props.history.push("/checkout")
    }
    componentDidMount() {
        this.props.onIngredientsNULL()
    }

    render() {

        const disabledInfo = { ...this.props.ing }
        for (let i in disabledInfo) {
            disabledInfo[i] = disabledInfo[i] <= 0
        }
        let orderSummary = <OrderSumary ingredients={this.props.ing}
            Continue={this.purchaseContinueHandler}
            Cancel={this.ModalCloseHandler}
            price={this.props.price} />
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} ModalClosed={this.ModalCloseHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.ing} />
                <BurgerControls
                    ingredientsAdded={this.props.onIngredientsAdded}
                    ingredientsRemoved={this.props.onIngredientsRemoved}
                    disable={disabledInfo}
                    price={this.props.price}
                    purchaseable={this.updatePurchaseable(this.props.ing)}
                    ordered={this.purchasingHander}
                    isAuth={this.props.isAuth}
                />
            </Aux>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        ing: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        isAuth: state.auth.token != null
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        onIngredientsAdded: (ingName) => dispatch(BurgerBuilderAction.addIngredient(ingName)),
        onIngredientsRemoved: (ingName) => dispatch(BurgerBuilderAction.removeIngredient(ingName)),
        onIngredientsNULL: () => dispatch(BurgerBuilderAction.removeAllIngredient()),
        onPurchasedInit: () => dispatch(BurgerBuilderAction.purchaseInit()),
        onAuthRedirectPath:(path)=>dispatch(BurgerBuilderAction.setAuthRedirectionPath(path))
    }

}
export default connect(mapStateToProps, mapDispatchToprops)(BurgerBuilder);