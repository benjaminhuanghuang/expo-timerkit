import React, { Component} from 'react';
import { View, Text, Button, Platform, TouchableOpacity, StyleSheet } from 'react-native';

import { globalStyles } from '../globalStyles';


export interface TemplateScreenProps {

}
export const TemplateScreen :React.SFC<TemplateScreenProps> = ():  JSX.Element =>{
  return (
    <View style={globalStyles.screenContainer}>
      <Text style = {globalStyles.h3}>Feed</Text>
      <Button title="Go to" onPress={()=>{}}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
})
