import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INTIAL_STATE = {
    name: '', phone: '', shift: ''
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === {prop: 'name', value: 'jane'}
            // alempi ei ole array, vaan arvo muuttuu lennossa
            return { ...state, [action.payload.prop]: action.payload.value }
        default:
            return state;
    }
};