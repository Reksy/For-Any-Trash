import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";

const sleep=(delay:number)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,delay);
    })
}


axios.defaults.baseURL = 'https://localhost:5001/api';

axios.interceptors.response.use(async response=>{
    sleep(1000).then(()=>{
        return response;
    }).catch((error)=>{
        console.log(error);
        return Promise.reject(error);
    })
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body = {}) => axios.post <T>(url, body).then(responseBody),
    put: <T> (url: string, body = {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
}

const Activities = {
    list: () => requests.get<Activity[]>('/activities')
}

const agent = {
    Activities
}

export default agent;