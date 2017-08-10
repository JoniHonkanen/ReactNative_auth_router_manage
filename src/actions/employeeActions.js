import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ props, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { props, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref('/users/' + currentUser.uid + '/employees')
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList({ type: 'reset' })
            });
    };
    console.log(name, phone, shift);
}

export const employeesFetchs = () => {
    const { currentUser } = firebase.auth(); // firebasen homma jolla saa kayttajan
    return (dispatch) => {
        firebase.database().ref('/users/' + currentUser.uid + '/employees')
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref('/users/' + currentUser.uid + '/employees/' + uid)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.employeeList({ type: 'reset' });
            });

    }
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref('/users/' + currentUser.uid + '/employees/' + uid)
            .remove()
            .then(() => {
                Actions.employeeList({ type: 'reset' });
            });
    };
};