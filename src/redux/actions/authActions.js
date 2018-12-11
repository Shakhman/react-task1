import axios from 'axios';
import {
    LOGIN_SUCCESS,
    GET_ERRORS,
    SET_IS_PROCESSING,
    LOGOUT_SUCCESS,
} from './types';

export const loginUser = (data, history) => dispatch => {
    axios.post('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', data)
        .then(({
            data
        }) => {
            if (data.status === 'err') {
                dispatch({
                    type: GET_ERRORS,
                    payload: [data.message]
                })
            } else {
                return data;
            }
        }).then(data => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.data
            })
            history.push('/profile');
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            dispatch({
                type: SET_IS_PROCESSING,
                payload: false
            })
        });
}

export const logoutUser = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS,
        payload: null,
    })
    window.location.reload();
}