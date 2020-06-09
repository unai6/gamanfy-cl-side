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

export const postConfirmationToken = (confirmationToken, email) => {
    return axiosInstance.post(`/auth/confirmation/${confirmationToken}`, {email})
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

export const companyPostConfirmationToken = (confirmationToken, email) => {
    return axiosInstance.post(`/auth-co/confirmation/${confirmationToken}`, {email})
}

export const companyResendToken = (email) => {
    return axiosInstance.post(`/auth-co/resend`, {email})
}

export const userCompleteProfile = (id, data) => {
    return axiosInstance.post(`/auth/user/${id}/complete-profile`, data)
};

export const companyCompleteProfile = (id, data) => {
    return axiosInstance.post(`/auth-co/company/${id}/complete-profile`, data)
};