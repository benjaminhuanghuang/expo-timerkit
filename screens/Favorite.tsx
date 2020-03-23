import React, { Component} from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';

import { globalStyles } from '../globalStyles';


export const FavoriteScreen : React.SFC = ():  JSX.Element =>{
  return (
    <View style={globalStyles.screenContainer}>
      <Text style = {globalStyles.h3}>Favorite</Text>
      <Button title="Go to" onPress={()=>{}}></Button>
    </View>
  )
}
