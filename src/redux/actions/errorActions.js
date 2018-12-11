import {
    GET_ERRORS,
} from './types';

export const setError = (message) => dispatch => {
    dispatch({
        type: GET_ERRORS,
        payload: [message]
    })
}