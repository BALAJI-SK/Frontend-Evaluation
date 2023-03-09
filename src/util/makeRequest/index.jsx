import axios, { AxiosError } from 'axios';

export const makeRequestAuth = async (config) => {
    try{
        const  request ={
            method:'POST',
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