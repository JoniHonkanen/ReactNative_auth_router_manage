import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INTIAL_STATE = {
    name: '', phone: '', shift: ''
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === {prop: 'name', value: 'jane'}
            // alempi ei ole array, vaan arvo muuttuu lennossa
            return { ...state, [action.payload.props]: action.payload.value }
        case EMPLOYEE_CREATE:
            return INTIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INTIAL_STATE;
        default:
            return state;
    }
};