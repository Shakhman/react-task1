import {
    GET_NEWS_SUCCESS,
} from '../actions/types';

const initialState = {
    data: [],
    count: 0,
}

export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case GET_NEWS_SUCCESS:
            return {
                data: payload,
                count: payload.length
            };
        default:
            return state;
    }
}