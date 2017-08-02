import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';

import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="auth">
                <Scene
                    sceneStyle={{ paddingTop: 65 }}
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                />
            </Scene>

            <Scene key="main">
                <Scene
                    initial
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    sceneStyle={{ paddingTop: 65 }}
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                />
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                    sceneStyle={{ paddingTop: 65 }}
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
