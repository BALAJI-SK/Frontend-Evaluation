import axios, { AxiosError } from 'axios';
import  {BACKENDBASEURL} from '../constants';

export const makeRequest = async (config) => {
    try {
        
        const  request ={
            ...config,
            baseURL:BACKENDBASEURL
        };
        const response = await axios(request);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error);
        } else {
            throw new Error('Something went Wrong');
        }
    }
};
export const makeRequestAuth = async (config) => {
    try{
        const  request ={
            method:config.method,
            url:config.url,
            baseURL:config.baseURL,
            data:{
                useremail: config.body.username,
                password: config.body.password}
        };
        const response = await axios(request);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error);
        } else {
            throw new Error('Something went Wrong');
        }
    }
};