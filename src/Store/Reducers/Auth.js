import * as actionTypes from '../Action/actionTypes'

const initialState={
    token:null,
    userId:null,
    loading:false,
    error:null,
    authRedirectPath:'/'

}
const reducer = (state = initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.AUTH_START:
            return{
                ...state,
                loading:true,
                error:null
            };
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                token:action.token,
                userId:action.userId
            }
        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case actionTypes.SET_AUTH_REDIRECTION_PATH:
            return{
                ...state,
                authRedirectPath:action.path
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                token:null,
                userId:null
            }
            default:
                return state;

    }

}
export default reducer