import { axiosInstance } from './api';

export const recommendationsDashboard = (id) => {
    return axiosInstance.get(`/recommend/${id}/dashboard`)
}

export const companyUserSendRecommendation = (userId, offerId, companyId, data) => {
    return axiosInstance.post(`/recommend/companyUser/${userId}/${offerId}/${companyId}`, data)
}

export const influencerUserSendRecommendation = (companyId, userId, offerId, data) => {
    return axiosInstance.post(`/recommend/influencerUser/${companyId}/${userId}/${offerId}`, data)
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