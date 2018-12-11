import {
    GET_MENU,
} from './types';

const menu = [{
        text: "News",
        link: "/news",
        order: 1,
        isAuth: false
    },
    {
        text: "Profile",
        link: "/profile",
        order: 2,
        isAuth: true
    }
];

export const getMenu = (value) => dispatch => dispatch({
    type: GET_MENU,
    payload: menu
});