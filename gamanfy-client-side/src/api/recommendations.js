import { axiosInstance } from './api';

export const recommendationsDashboard = (id) => {
    return axiosInstance.get(`recommend/${id}/dashboard`)
}

export const sendRecomendation = (companyId, offerId, userId) => {
    return axiosInstance.post(`/recommend/${companyId}/${offerId}/${userId}`)
}

export const rejectRecommendation = (id) => {
    return axiosInstance.post(`/recommend/reject-rec/${id}`)
} 