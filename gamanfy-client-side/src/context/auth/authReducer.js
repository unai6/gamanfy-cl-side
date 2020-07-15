import { LOGIN_SUCCESS, LOGIN_ERROR, COMPLETE_PROFILE_SUCCESS, COMPLETE_PROFILE_ERROR} from '../../constants/index';

export default (state, action) => {
	switch(action.type) {
        case COMPLETE_PROFILE_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            sessionStorage.setItem('token', action.payload.token);
            sessionStorage.setItem('user', JSON.stringify(action.payload.user));
            
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
} 

    





































/* import { 
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_REQUEST,
  LOGOUT
} from '../../constants';

export default (state, action) => {
  switch(action.type) {
      case LOGIN_SUCCESS:
          localStorage.setItem('token', action.payload.token);
          return {
              ...state,
              auth: true,
              loading: false
          }
      case USER_REQUEST: 
          return {
              ...state,
              auth: true,
              user: action.payload, 
              loading: false
          }
      case LOGOUT:
      case LOGIN_ERROR:
          localStorage.removeItem('token');
          return {
              ...state,
              token: null,
              user: null,
              auth: null,
              message: action.payload, 
              loading: false
          }
      
      default:
          return state;
  }
} */