import { LOGIN_SUCCESS, LOGIN_ERROR, COMPLETE_PROFILE_SUCCESS, COMPLETE_PROFILE_ERROR} from '../../constants/index';

export default (state, action) => {
	switch(action.type) {
        case COMPLETE_PROFILE_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
        
			return {
				...state,
				token: action.payload.token,
                user: action.payload.user,
				loading: false
            }		
        case COMPLETE_PROFILE_ERROR:
		case LOGIN_ERROR:
			localStorage.removeItem('token');
			localStorage.removeItem('user');
            
				return {
					...state,
					token: null,
                    user: null,
					message: action.payload, 
                    loading: false
				}
		default:
			return state;
	}
};