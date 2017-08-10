import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

import Card from './common/card';
import CardSection from './common/cardSection';
import Button from './common/button';

import EmployeeForm from './employeeForm';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
        //jos shift ei maaritelty, niin arvoksi monday
    }
                // ALEMPI ...this.props lahettaa kaiken EmployeeCreate classin propsit employeeFormille
    render() {
        console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button
                        onPressButton={this.onButtonPress.bind(this)}
                    >
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
}

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(EmployeeCreate);