import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

function Footer({ children }) {
    return (
        <View style={styles.footer}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        position:'absolute',
        bottom: 10,
        width: screenWidth - 40,
        left: 20
    }
});

export default Footer;