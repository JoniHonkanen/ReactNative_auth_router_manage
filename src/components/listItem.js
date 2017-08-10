import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import CardSection from './common/cardSection';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee }); // lahetetaan tiedot propsina
    }

    render() {
        const { name } = this.props.employee
        console.log(name);
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;

