import React, { Component} from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';

import { globalStyles, COLORS } from '../globalStyles';


export interface ComponentTemplateProps {

}
export const ComponentTemplate :React.FC<ComponentTemplateProps> = ():  JSX.Element =>{
  return (
    <View style={globalStyles.screenContainer}>
      <Text style = {globalStyles.h3}>Feed</Text>
      <Button title="Go to" onPress={()=>{}}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "column",
    borderTopColor: COLORS.FONT_COLOR_NORMAL,
    borderTopWidth: 1
  },
  text: {
    fontSize: 13,
    textAlign: "center",
    color: COLORS.FONT_COLOR_NORMAL
  }
});
