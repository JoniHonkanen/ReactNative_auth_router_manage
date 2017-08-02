import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => { // REDUX THUNK
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => console.log('asdasd'))
            .then(user => {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
                Actions.main(); // ROUTE HOMMA
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

                    })
                    .catch(() => {
                        dispatch({ type: LOGIN_USER_FAIL });
                    })
            });
    };
};
