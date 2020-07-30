import { axiosInstance } from './api';

export const getOffersDashBoard = (data) => {
    return axiosInstance.get('/offers/dashboard', data)
};

export const postOffer = (companyId, data) => {
    return axiosInstance.post(`/offers/${companyId}/post-job-offer`, data);
};

export const editOffer = (companyId, offerId, data) => {
    return axiosInstance.put(`/offers/${companyId}/${offerId}/edit-offer`, data)
};

export const deleteOffer = (companyId, offerId, data) => {
    return axiosInstance.post(`/offers/${companyId}/${offerId}/delete-offer`, data)
};

export const offerDetails = (id) => {
    return axiosInstance.get(`/offers/offer-details/${id}`);
}

export const askForReport = (offerId, companyId, recommendationId) => {
    return axiosInstance.post(`/offers/company/infoRequest/${offerId}/${companyId}/${recommendationId}`)
}

export const candidateReport = (recId, data) => {
    return axiosInstance.post(`/offers/${recId}/candidate-info`, data)
}
