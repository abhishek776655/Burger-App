import React, { Component } from 'react'
import Order from '../../Components/Order/Order'
import axios from '../../axios-orders'
import {connect} from 'react-redux'

class Orders extends Component{
    state={
        orders:[],
        loading:false
    }
    componentDidMount(){
        const queryParams ='?auth=' + this.props.token + '&orderBy="userId"&equalTo="' + this.props.userId + '"';
        axios.get('/orders.json'+queryParams)
        .then((res)=>{
            const fetchedData=[]
            for(let i in res.data){
                fetchedData.push({
                    ...res.data[i],
                    id:i
                })
            }
            this.setState({loading:false,orders:fetchedData})
            console.log(res.data)

        })
        .catch(err=>{
            this.setState({loading:false})
        })
    }
    render(){
        return(
        <div>
            {this.state.orders.map((order)=>{
                return <Order
                        key={order.id} 
                        ingredients={order.ingredients}
                        price={+order.price}       />
            })}
        </div>
        )
    }
}
const mapStateTOProps = (state)=>{
    return{
    token:state.auth.token,
    userId:state.auth.userId
}
}
export default connect(mapStateTOProps)(Orders)