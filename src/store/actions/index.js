import { List, SignIn, SignUp,Update } from "../actiontypes/index.js"
import { signup, login, todo_list, edit_todo, create_todo, delete_todo  } from "../../services"

export const log_in = (params) =>async (dispatch)=>{
    dispatch({
        type:SignIn,
        isLoading:true,
        token:null,
        error:''
    })
    login(params).then((res)=>{
        dispatch({
            type:SignIn,
            isLoading:false,
            token:res.token,
            error:''
        })
    }).catch((err)=>{
        dispatch({
            type:SignIn,
            isLoading:false,
            token:null,
            error:err.message
        })
    })
}

export const user_signup = (params) =>async (dispatch)=>{
    dispatch({
        type:SignUp,
        isLoading:true,
        data:[],
        error:''
    })
    signup(params).then((res)=>{
        dispatch({
            type:SignUp,
            isLoading:false,
            data:res.data,
            error:''
        })
    }).catch((err)=>{
        dispatch({
            type:SignUp,
            isLoading:false,
            data:[],
            error:err.message
        })
    })
}

export const create_todos = (params) =>async (dispatch)=>{
    dispatch({
        type:Update,
        isLoading:true,
        error:''
    })
    create_todo(params).then((res)=>{
        dispatch({
            type:Update,
            isLoading:false,
            error:''
        })
    }).catch((err)=>{
        dispatch({
            type:Update,
            isLoading:false,
            error:err.message
        })
    })
}

export const get_todo = () =>async (dispatch)=>{
    dispatch({
        type:List,
        isLoading:true,
        data:[],
        error:''
    })
    todo_list().then((res)=>{
        dispatch({
            type:List,
            isLoading:false,
            data:res.data,
            error:''
        })
    }).catch((err)=>{
        dispatch({
            type:List,
            isLoading:false,
            data:[],
            error:err.message
        })
    })
}

export const update_todos = (params) =>async (dispatch)=>{
    dispatch({
        type:Update,
        isLoading:true,
        error:''
    })
    edit_todo(params).then((res)=>{
        dispatch({
            type:Update,
            isLoading:false,
            error:''
        })
    }).catch((err)=>{
        dispatch({
            type:Update,
            isLoading:false,
            error:err.message
        })
    })
}

export const delete_todos = (params) =>async (dispatch)=>{
    dispatch({
        type:Update,
        isLoading:true,
        error:''
    })
    delete_todo(params).then((res)=>{
        dispatch({
            type:Update,
            isLoading:false,
            error:''
        })
    }).catch((err)=>{
        dispatch({
            type:Update,
            isLoading:false,
            error:err.message
        })
    })
}