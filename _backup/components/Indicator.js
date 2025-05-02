import React from 'react';
import {
    StyleSheet, Text, View, Button
} from 'react-native';

function Fieldhorizontal({ status}) {
    return (
        <View style={styles.container}>
            <Button title="pre"></Button>
            <Text style={[styles.value]}>{status}</Text>
            <Button title="next"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    label: {
        fontSize: 18,
        fontWeight: '500'
    },

    value: {
        fontSize: 14,
        fontWeight: '300'
    }
});

export default Fieldhorizontal;