import {
    combineReducers
} from 'redux';
import auth from './authReducer';
import errors from './errorReducer';
import profile from './profileReducer';
import common from './commonReducer';
import news from './newsReducer';
import menu from './menuReducer';

export default combineReducers({
    auth,
    errors,
    profile,
    common,
    news,
    menu,
})