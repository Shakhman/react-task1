import {
    GET_PROFILE_SUCCESS,
} from '../actions/types';

export default function (state = {}, {
    type,
    payload
}) {
    switch (type) {
        case GET_PROFILE_SUCCESS:
            return payload;
        default:
            return state;
    }
}