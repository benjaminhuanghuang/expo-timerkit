import React, { Component} from 'react';
import { View, Text, Button, Platform, TouchableOpacity, StyleSheet } from 'react-native';

import { globalStyles } from '../globalStyles';


export interface TemplateScreenProps {

}
export const TemplateScreen :React.FC<TemplateScreenProps> = ():  JSX.Element =>{
  return (
    <>
      <Text style = {globalStyles.h3}>Feed</Text>
      <Button title="Go to" onPress={()=>{}}></Button>
    </>
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
