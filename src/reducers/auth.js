import { REGISTER_SUCCESS, REGISTER_FAILED } from '../actions/types';

const initialState = {
    token: localStorage.getItem(),
    isAuthenticated: null,
    loading: true,
    user: null
};
    
export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAILED:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

            default:
                return state;
    }
}

