import { axiosInstance } from './api';

export const userDashboard = (id, token) => {
  return axiosInstance.get(`/user/${id}/dashboard`, { headers: { Authorization: token }})
}

export const companyDashboard = (id, token) => {
  return axiosInstance.get(`/company/${id}/dashboard`, { headers: { Authorization: token }})
}

export const getUserData = (id) => {
  return axiosInstance.get(`/auth/user/getData/${id}`)
}

export const handleUpload = (theFile) => {
    return axiosInstance.post(`/auth/upload`, theFile)
      
}

