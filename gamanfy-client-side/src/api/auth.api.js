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
    return axiosInstance.post(`/auth/resend`, {email})
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
    return axiosInstance.get(`offers/getData/${id}`)
}

export const userChangeProfPic = (id, data) => {
    return axiosInstance.post(`/auth/user/${id}/change-profile-picture`, data)
};

export const resetCompanyPasswordMail = () => {
    return axiosInstance.post('/auth-co/company/reset-password-email');
};

export const companyPasswordReset = (id, data) => {
    return axiosInstance.post(`/auth-co/company/password-reset/${id}`, data)
};  

export const resetUserPasswordMail = () => {
    return axiosInstance.post(`/auth/user/reset-password-email`);
};

export const userPasswordReset = (id, data) => {
    return axiosInstance.post(`/auth/user/password-reset/${id}`, data)
};

