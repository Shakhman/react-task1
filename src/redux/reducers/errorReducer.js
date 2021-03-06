import {
    GET_ERRORS,
    RESET_ERRORS,
} from '../actions/types';

export default function (state = [], {
    type,
    payload
}) {
    switch (type) {
        case GET_ERRORS:
            return payload
        case RESET_ERRORS:
            return payload
        default:
            return state;
    }
}