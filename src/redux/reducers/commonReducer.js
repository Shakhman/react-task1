import {
    SET_IS_PROCESSING,
} from '../actions/types';

const initialState = {
    isProcessing: false,
};

export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case SET_IS_PROCESSING:
            return {
                ...state,
                isProcessing: payload
            }
        default:
            return state;
    }
}