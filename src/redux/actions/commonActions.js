import {
    SET_IS_PROCESSING,
} from './types';

export const setIsProcessing = (value) => dispatch => dispatch({
    type: SET_IS_PROCESSING,
    payload: value,
});