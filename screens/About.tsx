import React, { Component} from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';

import { globalStyles } from '../globalStyles';


export const AboutScreen : React.SFC = ():  JSX.Element =>{
  return (
    <View style={globalStyles.screenContainer}>
      <Text style = {globalStyles.h3}>About...</Text>
      <Button title="Go to" onPress={()=>{}}></Button>
    </View>
  )
}
