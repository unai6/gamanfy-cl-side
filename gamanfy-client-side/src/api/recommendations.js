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