import React from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

function Fieldhorizontal({ label, value, color }) {
    return (
        <View style={styles.container}>
            <Text key={index} style={[styles.label, { color }]}>{label}</Text>
            <Text style={[styles.value, { color }]}>{value}</Text>
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