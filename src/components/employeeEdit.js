import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

import EmployeeForm from './employeeForm';
import Card from './common/card';
import CardSection from './common/cardSection';
import Button from './common/button';
import Confirm from './common/confirmModal';


class EmployeeEdit extends Component {

    state = { showModal: false };

    //tulee propsina listItemilta
    componentWillMount() {
        _.each(this.props.employee, (value, props) => {
            this.props.employeeUpdate({ props, value });
        });
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid }); // vika tulee propsina
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, 'Your upcoming shift is on' + shift)
    }

    onAccept() {
        const { uid } = this.props.employee;

        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPressButton={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPressButton={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPressButton={() => this.setState({ showModal: !this.state.showModal })}>
                        Erota työntekijä
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Haluatko varmasti poistaa?
                </Confirm>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);