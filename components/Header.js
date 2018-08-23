import React from 'react';
import { StyleSheet, View } from 'react-native';

function Header({ children }) {
    return (
        <View style={styles.header}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginTop: 30,
    }
});

export default Header;