import * as actionTypes from '../Action/actionTypes'
const INGREDIENTS_PRICE = {
    salad:10,
    bacon:10,
    cheese:20,
    meat:40
}
const initialState={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:40,
    building:false
}
const reducer = (state=initialState,action)=>{

    switch(action.type){
        case actionTypes.ADD_INGRDIENTS:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientsName]:state.ingredients[action.ingredientsName]+1
                },
                totalPrice:state.totalPrice+INGREDIENTS_PRICE[action.ingredientsName],
                building:true
                
            }
        case actionTypes.REMOVE_INGRDIENTS:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientsName]:state.ingredients[action.ingredientsName]-1
                },
                totalPrice:state.totalPrice+INGREDIENTS_PRICE[action.ingredientsName],
                building:true
              
            }
        case actionTypes.REMOVEALL_INGREDIENTS:
            return{
                ...state,
                ingredients:{
                    salad:0,
                    bacon:0,
                    cheese:0,
                    meat:0
                },
                totalPrice:40,
                building:false

            }
        default:
            return state

    }
}
export default reducer