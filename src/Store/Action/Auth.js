import * as actions from './actionTypes'
import Axios from 'axios'
export const  authStart = ()=>{
return{
    type:actions.AUTH_START,
    
}
}
export const  authFail = (error)=>{
    return{
        type:actions.AUTH_FAIL,
        error:error
    }
    }
export const  authSuccess = (token,userId)=>{
        return{
            type:actions.AUTH_SUCCESS,
           token:token,
           userId:userId
        }
    }
export const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return {
        type:actions.LOGOUT
    }
}
export const checkAuthTime= (expirationTime)=>{
    return dispatch=>{
    setTimeout(()=>{
       
        dispatch(logout())
    },expirationTime*1000)
}
}
export const auth = (email,password,isSignUp)=>{
    return (dispatch)=>{
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBS34jBW3aM5175l5V77ia254OcqayHur8"
        if(!isSignUp){
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBS34jBW3aM5175l5V77ia254OcqayHur8"
        }
        dispatch(authStart())
        const authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }
        Axios.post(url,authData)
        .then((response)=>{
            
            const expirationDate =  new Date((new Date().getTime() + response.data.expiresIn*1000))
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem("userId",response.data.localId)
           
            dispatch(authSuccess(response.data.idToken,response.data.localId))
            dispatch(checkAuthTime(response.data.expiresIn))
        })
        .catch((error)=>{
          
            dispatch(authFail(error.response.data.error))
        })
    }
}
export const setAuthRedirectionPath = (path)=>{
    return{
        type:actions.SET_AUTH_REDIRECTION_PATH,
        path:path
    }
}
export const checkAuthState = ()=>{
    return dispatch=>{
        const token = localStorage.getItem('token')
        if(!token){
           
            dispatch(logout())
        }
        else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if((expirationDate<=new Date())){
               
                dispatch(logout())
            }else{
            const userId = localStorage.getItem('userId')
            
           
        dispatch(authSuccess(token,userId))
        dispatch(checkAuthTime((expirationDate.getTime()-new Date().getTime())/1000))
            }
        }
    }
}