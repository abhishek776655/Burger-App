import * as actionTypes from '../Action/actionTypes'

const  initialState={
    orders:[],
    loading:false,
    purchased:false
}
const reducers = (state=initialState,action)=>{
switch(action.type){
    case actionTypes.PURCHASE_INIT:
        return {
            ...state,
            purchased:false
        }
    case actionTypes.PURCHASE_BURGER_SUCCESS:
        const newOrder = {
            ...action.orderData,
            id:action.orderId
        }
        return{
            ...state,
            loading:false,
            purchased:true,
            orders:state.orders.concat(newOrder)
        };
    case actionTypes.PURCHASE_BURGER_ERROR:
        return{
            ...state,
            loading:false
        };
    case actionTypes.PURCHASE_BURGER_START:
        return{
            ...state,
            loading:true
        }
    default:
        return state;

}


}
export default reducers;