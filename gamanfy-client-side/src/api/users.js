import { axiosInstance } from './api';

export const userDashboard = (id, token) => {
  return axiosInstance.get(`/user/${id}/dashboard`, { headers: { Authorization: token }})
}

export const companyDashboard = (id, token) => {
  return axiosInstance.get(`/company/${id}/dashboard`, { headers: { Authorization: token }})
}



