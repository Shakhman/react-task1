import axios from 'axios';
import {
    GET_PROFILE_SUCCESS,
    GET_ERRORS,
    SET_IS_AUTH,
    SET_IS_PROCESSING,
} from './types';

export const getProfile = (id) => dispatch => {
    axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`)
        .then(({
            data
        }) => {
            if (data.status === 'err') {
                dispatch({
                    type: GET_ERRORS,
                    payload: [data.message]
                });
            } else {
                return data;
            }
        }).then(data => {
            dispatch({
                type: SET_IS_AUTH,
                payload: true
            })
            return data;
        }).then(data => dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: data.data
        })).catch(err => {
            console.log(err);
        }).finally(() => {
            dispatch({
                type: SET_IS_PROCESSING,
                payload: false
            })
        });
}