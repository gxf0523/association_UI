import axios from "axios";
const instance = axios.create({
    withCredentials: true
});

//请求拦截器
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//响应拦截器
instance.interceptors.response.use(
    response => {
        return Promise.resolve(response.data);
    },
    error => {
        return Promise.reject(error);
    }
);
var prefixUrl = 'http://47.93.35.112:8099';
export default {
    getHomeData: data => {
        return instance.get(prefixUrl + "/api.php");
    },
    getDetailData: data => {
        return instance.get(prefixUrl + "/api.php/index/detail/id/"+data);
    }
};
