import React from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

function renderLabel(label, multiLine, color) {
    if (multiLine) {
        let labLines = label.split(' ');
        return labLines.map((line, i) => (<Text key={i} style={[styles.label, { color }]}>{line}</Text>));
    }
    else {
        return <Text style={[styles.label, { color }]}>{label}</Text>
    }
}

function FieldVertical({ label, value, multiLine, color }) {

    return (
        <View style={styles.container}>
            {
                renderLabel(label, multiLine)
            }
            <Text style={[styles.value, { color }]}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
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

export default FieldVertical;