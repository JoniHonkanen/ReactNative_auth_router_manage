import React from 'react';
import { Text, View, Modal } from 'react-native';
import CardSection from './cardSection';
import Button from './button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => { }}
            transparent
            visible={visible}
        >
            <View style={styles.containerStyle}>
                <CardSection style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPressButton={onAccept}>Kyllä</Button>
                    <Button onPressButton={onDecline}>Ei</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export default Confirm;