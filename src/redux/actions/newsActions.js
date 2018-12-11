import axios from 'axios';
import {
    GET_NEWS_SUCCESS,
    GET_ERRORS,
    SET_IS_PROCESSING,
} from './types';

export const getNews = () => dispatch => {
    axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/news`)
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
        }).then(data => dispatch({
            type: GET_NEWS_SUCCESS,
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