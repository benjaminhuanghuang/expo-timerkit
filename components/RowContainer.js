import React from 'react';
import { StyleSheet, View } from 'react-native';

function RowContainer({ children }) {
    return (
        <View style={styles.rowContainer}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30
    }
});

export default RowContainer;