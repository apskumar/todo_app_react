import axios from 'axios';
import { Base_Url } from '../utils';

const axiosInstance = axios.create({
    baseURL:Base_Url,
    headers: {
      "Content-type": "application/json",
    }
})

export const get = async (url, params) => {
      return axiosInstance.get(url, { params });
  };
  
  export const post = async (url, data) => {
      return axiosInstance.post(url, data);
  };
  
  export const put = async (url, data) => {
      return axiosInstance.put(url, data);
  };
  
  export const deletes = async (url, data) => {
      return axiosInstance.delete(url, {data: data});
  };