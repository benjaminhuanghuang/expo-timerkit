import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'

import { globalStyles } from '../globalStyles';



export const AnalysisScreen : React.SFC = ():  JSX.Element =>{
  return (
    <View style={globalStyles.screenContainer}>
      <Text style = {globalStyles.h3}>Analysis...</Text>
      <Button title="Go to" onPress={()=>{}}></Button>
    </View>
  )
}
