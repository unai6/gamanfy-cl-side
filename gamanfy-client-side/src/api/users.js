import { axiosInstance } from './api';

export const userDashboard = (id, token) => {
  return axiosInstance.get(`/auth/user/${id}/dashboard`, { headers: { Authorization: token }})
}

export const companyDashboard = (id, token) => {
  return axiosInstance.get(`/auth-co/company/${id}/dashboard`, { headers: { Authorization: token }})
}



