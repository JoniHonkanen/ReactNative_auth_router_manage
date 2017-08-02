import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Reducers from './reducers';
import LoginForm from './components/loginForm';
import Router from './router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyD54hgpZdxzFF0_CCRfIJzyQG0lwPILCvY",
            authDomain: "managerproject-9f209.firebaseapp.com",
            databaseURL: "https://managerproject-9f209.firebaseio.com",
            projectId: "managerproject-9f209",
            storageBucket: "",
            messagingSenderId: "571371542581"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;