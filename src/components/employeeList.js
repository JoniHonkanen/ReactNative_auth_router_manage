import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetchs } from '../actions';
import _ from 'lodash';
import ListItem from './listItem';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetchs();
        this.createDataSource(this.props);

    }
    componentDidMount() {
        console.log('PROPSIT: ', this.props);
        if (this.props.employees.length === 0) {
            console.log("lets fetch users again");
            this.props.employeesFetchs();
        } else {
            console.log("no employees in list");
        }

    }
    /*
    componentDidMount() {
        this.props.employeesFetchs();
        this.createDataSource(this.props);
    }
*/
    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be renderred with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) { // tuodaan employeeReducerista
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.DataSource = ds.cloneWithRows(this.props.employees);
    }

    renderRow(employees) {
        console.log('EMPLOYEES: ', employees);
        return (
            <ListItem employee={employees} />
        );
    }

    render() {
        console.log(this.props);
        return (
            <ListView
                enableEmptySections
                dataSource={this.DataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

function mapStateToProps(state) {
    console.log('STATE ON TALLAINEN: ', state);
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetchs })(EmployeeList);