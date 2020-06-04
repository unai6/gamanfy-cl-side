import {axiosInstance} from '../api/api';

const tokenAuth = token => {
    if(token) {
        axiosInstance.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axiosInstance.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;