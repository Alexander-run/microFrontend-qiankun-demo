import axios from 'axios';
import qs from 'query-string';
// import actions from '../shared/actions'

export const BASE_URL = '/onestop-management';

const ajax = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

const responseInterceptor = (res) => {
  return res;
};
const ajaxRequestInterceptor = (config) => {
  let token = localStorage.getItem('token')
  // actions.onGlobalStateChange((state)=>{
  //   token = state.token
  // },true)
  config.headers = {
    "X-Access-Token": `${token}`,
  }
  return config;
};

ajax.interceptors.response.use(responseInterceptor);
ajax.interceptors.request.use(ajaxRequestInterceptor);
ajax.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

export { ajax };
