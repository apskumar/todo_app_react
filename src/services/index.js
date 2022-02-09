import {get, post,put,deletes} from '../core/api';


export const login = async (params) =>{
  console.log({params});
    try{
      let response = await post('/api/auth',params);
      return response.data;
    }
    catch(e){
        console.log(e);
    } 
    return null
}

export const signup =async (params) =>{
    try{
      let response = await post('/',params);
      return response.data;
    }
    catch(e){
        console.log(e);
    } 
    return null
}

export const todo_list = async () =>{
    try{
      let response = await get('/api/posts');
      return response.data;
    }
    catch(e){
        console.log(e);
    } 
    return null
}

export const edit_todo = async (params) =>{
    try{
      let response = await put('/api/posts',params);
      return response.data;
    }
    catch(e){
        console.log(e);
    } 
    return null
}

export const create_todo = async (params) =>{
    try{
      let response = await post('/api/posts',params);
      return response.data;
    }
    catch(e){
        console.log(e);
    } 
    return null;
}

export const delete_todo = async (params) =>{
    try{
      let response = await deletes('/api/posts?id='+params);
      return response.data;
    }
    catch(e){
        console.log(e);
    } 
    return null
}