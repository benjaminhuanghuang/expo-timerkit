import React, { Component} from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';

import { globalStyles } from '../globalStyles';


export const SupportScreen : React.FC= ():  JSX.Element =>{
  return (
    <View style={globalStyles.screenContainer}>
      <Text style = {globalStyles.h3}>SupportScreen...</Text>
    </View>
  )
}
