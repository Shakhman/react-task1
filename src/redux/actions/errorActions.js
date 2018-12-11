import {
    GET_ERRORS,
    RESET_ERRORS,
} from './types';

export const setError = (message) => dispatch => {
    dispatch({
        type: GET_ERRORS,
        payload: [message]
    })
}

export const resetErrors = (message) => {
    return {
        type: RESET_ERRORS,
        payload: [],
    }
}