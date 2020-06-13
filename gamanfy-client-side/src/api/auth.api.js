import { axiosInstance } from './api';


export const signup = (data) => {
    return axiosInstance.post('/auth/user/signup', data)
};

export const login = (data) => {
	return axiosInstance.post('/auth/user/login', data);
};

export const logout = () => {
    return axiosInstance.post("/auth/user/logout", {});
  }

export const postConfirmationToken = (id, confirmationToken, isCompany, email) => {
    return axiosInstance.post(`/auth/confirmation/${id}/${confirmationToken}/${isCompany}`, {email})
}

export const resendToken = (email) => {
    return axiosInstance.post(`auth/resend`, {email})
}

export const companySignup = (data) => {
    return axiosInstance.post('/auth-co/company/signup', data)
};

export const companyLogin = (data) => {
	return axiosInstance.post('/auth-co/company/login', data);
};

export const companyLogout = () => {
    return axiosInstance.post("/auth-co/company/logout", {});
  }

export const companyPostConfirmationToken = (id, confirmationToken, email) => {
    return axiosInstance.post(`/auth-co/confirmation/${id}/${confirmationToken}`, {email})
}

export const companyResendToken = (email) => {
    return axiosInstance.post(`/auth-co/resend`, {email})
}

export const userCompleteProfile = (id, isCompany, data) => {
    return axiosInstance.post(`/auth/user/${id}/${isCompany}/complete-profile`, data)
};

export const companyCompleteProfile = (id, data) => {
    return axiosInstance.post(`/auth-co/company/${id}/complete-profile`, data)
};

export const getCompanyData = (id) => {
    return axiosInstance.get(`auth-co/company/getData/${id}`)
}