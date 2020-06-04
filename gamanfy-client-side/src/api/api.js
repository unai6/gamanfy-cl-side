import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL:`${process.env.REACT_APP_API_URI}`,
	withCredentials: true
});

/*  axiosInstance.interceptors.response.use(response => {
	return response.data;
}, error => {
	return Promise.reject(error);
}); 
 */