import { axiosInstance } from './api';

export const userDashboard = (id, token) => {
  return axiosInstance.get(`auth/user/${id}/dashboard`, { headers: { Authorization: token }})
}

export const companyDashboard = (id, token) => {
  return axiosInstance.get(`auth-co/company/${id}/dashboard`, { headers: { Authorization: token }})
}

export const getUserData = (id) => {
  return axiosInstance.get(`/auth/user/getData/${id}`)
}

export const getCompanyData =(id) => {
  return axiosInstance.get(`/offers/getData/${id}`)
}
export const handleUpload = (theFile) => {
    return axiosInstance.post(`/auth/upload`, theFile)  
}

export const editUserProfile = (id, token) => {
  return axiosInstance.put(`/auth/user/${id}/edit-profile`, { headers: { Authorization: token }})
}

export const editCompanyProfile = (id, data, token) => {
  return axiosInstance.post(`/auth-co/company/${id}/edit-profile`, data, { headers: { Authorization : token }})
}