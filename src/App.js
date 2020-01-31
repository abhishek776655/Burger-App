import React, { Component } from 'react';
import './App.css';
import Layout from './Containers/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout'
import {Route,Switch} from 'react-router-dom'
import Orders from './Containers/Orders/Orders'
import Auth from './Containers/Auth/Auth'
import Logout from './Containers/Logout/Logout'
import * as actions from './Store/Action/index'
import {connect} from 'react-redux'


class App extends Component {
  componentDidMount(){
     this.props.onAutoSignUp()
  }
  render(){
    let route = <Switch>
        <Route path='/' exact component={BurgerBuilder}/>
        <Route path='/auth' component={Auth}/>
    </Switch>
    
    
    if(this.props.isAuth){
    route = <Switch>
        <Route path='/' exact component={BurgerBuilder}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/logout' component={Logout}/>
    </Switch>
    }
  return (
    <div>
      <Layout>
     {route}
      </Layout>
    </div>
  );
}
}
const mapDispatchToProps = (dispatch)=>{
  return{
    onAutoSignUp:()=>dispatch(actions.checkAuthState())
  }
}
const mapStateToProps = (state)=>{
  return{
    isAuth:state.auth.token!==null
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
