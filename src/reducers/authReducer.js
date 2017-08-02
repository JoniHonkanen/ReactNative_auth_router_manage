import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INTIAL_STATE = { email: '', password: '', user: '', error: '', loading: false };

export default (state = INTIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            //   console.log('action!');
            return { ...state, email: action.payload }; //vanha state, joka muokataan uudella
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INTIAL_STATE, user: action.payload }; //INTIAL_STATE palauttaa lahtoarvot
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        default:
            return state;
    }
}