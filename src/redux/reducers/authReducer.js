import {
    LOGIN_USER,
    LOGIN_SUCCESS,
    SET_IS_AUTH,
    LOGOUT_SUCCESS,
} from '../actions/types';

const initialState = {
    user: null,
    isAuth: false,
}

export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case LOGIN_USER:
            return {
                ...state,
                user: payload,
            };
        case LOGIN_SUCCESS:
            return {
                user: payload,
                isAuth: true
            };
        case LOGOUT_SUCCESS:
            return {
                user: payload,
                isAuth: false
            };
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: payload
            };
        default:
            return state;
    }
}