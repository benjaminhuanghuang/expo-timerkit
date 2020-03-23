import React, { Component} from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';

import { globalStyles } from '../globalStyles';


export const CountdownScreen : React.SFC= ():  JSX.Element =>{
  return (
    <>
      <Text style = {globalStyles.h3}>CountdownScreen...</Text>
    </>
  )
}
