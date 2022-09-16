/** @format */

import axios from 'axios';
import {Configs} from '../constants';

function baseAxios(options: any) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const headers = {...defaultHeaders, ...options?.headers};
  return axios.create({
    baseURL: Configs.BASE_URL,
    timeout: options?.timeout || Configs.API_TIMEOUT,
    headers: headers,
  });
}

function executeRequest(
  method: string,
  pathname: string,
  data: any,
  options: any,
) {
  const body = !data ? {} : {data};
  const reqObj = {method, url: pathname, ...body};
  const baseAxiosRequest = baseAxios(options);

  console.log('body: ', body);

  return baseAxiosRequest
    .request(reqObj)
    .then(res => {
      return {...res.data, ...{statusCode: res.status}};
    })
    .catch(error => {
      return {
        ...error?.response?.data,
        ...{statusCode: error?.response?.status},
      };
    });
}

export default {
  get(pathname: string, query: string) {
    return executeRequest('get', pathname, null, {
      query: query,
    });
  },
  post(pathname: string, data: any) {
    return executeRequest('post', pathname, data, null);
  },
};
