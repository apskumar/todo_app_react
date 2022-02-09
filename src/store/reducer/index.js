import {SignIn, Update, SignUp, List} from '../actiontypes'
import { getItem, setItem } from '../../helper/storagehelper'

const initialState = {
    isLoggedIn:false,
    loading:false,
    error:'',
    data:[],
    token:null,
}

let init = function(){
    let token = getItem('token');
    initialState.token=token;
    initialState.isLoggedIn = token?true:false;
 }();

export default function (state=initialState, action) {
    switch (action.type) {
        case SignIn:
        case SignUp:
            setItem('token',action.token);
            return {
                ...state,
                token:action.token,
                isLoggedIn:action.token? true:false,
                loading:action.isLoading
            }
        case Update:
            return{
                ...state,
                loading:action.isLoading,
                error:action.error
            }
        case List:
            return{
                ...state,
                loading:action.isLoading,
                error:action.error,
                data:action.data
            }
        
        default: return state;
    }

}
