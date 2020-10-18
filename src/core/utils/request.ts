import axios, { Method } from 'axios';

type RequestParams = {

    method?: Method;
    url: string;
    params?: object;

}

const BASE_URL = 'https://api.github.com/users/';

export const makeRequest = ( { method = 'GET', url, params }: RequestParams ) => {

    return axios({

        method,

        url: `${BASE_URL}${url}`,

        params

    })

}