import * as ActionType from './actionTypes'

export const addIngredient = (name)=>{
    return{
        type:ActionType.ADD_INGRDIENTS,
        ingredientsName:name
    }
}
export const removeIngredient = (name)=>{
    return{
        type:ActionType.REMOVE_INGRDIENTS,
        ingredientsName:name
    }
}
export const removeAllIngredient = ()=>{
    return{ type:ActionType.REMOVEALL_INGREDIENTS}
    
}