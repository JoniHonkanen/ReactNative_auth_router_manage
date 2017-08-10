import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import CardSection from './common/cardSection';
import Input from './common/input';
import { employeeUpdate } from '../actions';
import { connect } from 'react-redux';

class EmployeeForm extends Component {

    onNameAdd(text) {
        console.log(text);
        this.props.employeeUpdate({ props: 'name', value: text })
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={this.onNameAdd.bind(this)}
                    // onChangeText={text => this.props.employeeUpdate({ props: 'name', value: text })}
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

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        //   style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ props: 'shift', value: day })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);