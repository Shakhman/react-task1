import {
    combineReducers
} from 'redux';
import auth from './authReducer';
import errors from './errorReducer';
import profile from './profileReducer';
import common from './commonReducer';
import news from './newsReducer';

export default combineReducers({
    auth,
    errors,
    profile,
    common,
    news,
})