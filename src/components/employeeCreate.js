import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

import Card from './common/card';
import CardSection from './common/cardSection';
import Input from './common/input';
import Button from './common/button';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ props: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="phone"
                        placeholder="555-55-555"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ props: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>Save</Button>
                </CardSection>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }


}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);