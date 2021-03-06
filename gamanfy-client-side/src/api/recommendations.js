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

export const rejectRecommendation = (recommendationId, offerId) => {
    return axiosInstance.post(`/recommend/user/reject-rec/${recommendationId}/${offerId}`);
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

export const candidatesInOffer = (offerId, companyId) =>{
    return axiosInstance.get(`/offers/candidates/${offerId}/${companyId}`)
}

export const updateProcessPlusCandidateInterview = (offerId, recommendationId) => {
    return axiosInstance.post(`/recommend/candidate-interview/updateCandidateProcess/${offerId}/${recommendationId}`)
}

export const acceptRecommendation = (offerId, recommendationId) => {
    return axiosInstance.post(`/recommend/candidate-accept-recommendation/updateCandidateProcess/${offerId}/${recommendationId}`)
}

export const uploadPDF = (userId, data) => {
    return axiosInstance.post(`/recommend/uploadPDF/${userId}`, data)
}