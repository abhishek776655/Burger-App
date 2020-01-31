import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
export const purchaseBurgerSuccess = (id,orderData)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        dataData:orderData

    }
}
export const purchaseBurgerStart = ()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START
        
    }
}
export const purchaseBurgerError= (error)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_ERROR,
        error:error
    }
}
export const purchaseBurger = (orderData,token)=>{
   
    return (dispatch)=>{
        dispatch(purchaseBurgerStart())
     
        axios.post('/orders.json?auth='+token,orderData)
        .then(response=>{
            dispatch(purchaseBurgerSuccess(response.data,orderData))
            
            
        }).catch(error=>{
            dispatch(purchaseBurgerError(error))
        })
    }


}
export const purchaseInit = ()=>{
    return{
        type:actionTypes.PURCHASE_INIT
        
    }
}