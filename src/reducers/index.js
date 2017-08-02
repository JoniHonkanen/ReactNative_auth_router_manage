import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import EmployeeFormReducer from './employeeFormReducer'

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});