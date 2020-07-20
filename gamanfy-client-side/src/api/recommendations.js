import { axiosInstance } from './api';

export const recommendationsDashboard = (id) => {
    return axiosInstance.get(`/recommend/${id}/dashboard`)
}

export const sendRecommendation = (companyId, offerId, userId, data) => {
    return axiosInstance.post(`/recommend/${companyId}/${offerId}/${userId}`, data)
}

export const rejectRecommendation = (id) => {
    return axiosInstance.post(`/recommend/reject-rec/${id}`);
} 

export const sendCompanyRecommendation = (id, data) => {
    return axiosInstance.post(`/recommend/${id}`, data);
}

export const deleteRecommendation = (userId, recommendationId, offerId, data) => {
    return axiosInstance.post(`/recommend/user/delete-recommendation/${userId}/${recommendationId}/${offerId}`, data)
}

export const inProcessRecs =(offerId) =>{
    return axiosInstance.get(`/recommend/${offerId}/inProcess`)
}