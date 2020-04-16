import React, { useState} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { RowContainer, DigitalTimer, DigitalTimerButton} from "../components";

import { globalStyles } from '../globalStyles';

 
export const CountdownScreen : React.FC= ():  JSX.Element =>{
  const  onTimerChange = (duration: number, count: number, isLast: boolean)=>{

  }
  return (
    <View style={globalStyles.screenContainer}>
       <RowContainer height={160}>
        <DigitalTimer timeValue={0} style={styles.digits} />
      </RowContainer>
      <ScrollView contentContainerStyle={styles.buttons}>
        <DigitalTimerButton seconds={10} size={180} backgroundColor="#3D3D3D" digitalStyle={styles.buttonDigits}></DigitalTimerButton>
        <DigitalTimerButton seconds={15} size={180} backgroundColor="#3D3D3D" digitalStyle={styles.buttonDigits}></DigitalTimerButton>
        <DigitalTimerButton  seconds={35} size={180} backgroundColor="#3D3D3D" digitalStyle={styles.buttonDigits}></DigitalTimerButton>
        <DigitalTimerButton seconds={45} size={180} backgroundColor="#3D3D3D" digitalStyle={styles.buttonDigits}></DigitalTimerButton>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPushed:{

  },
  digits: {
    color: "#FFFFFF",
    fontSize: 76,
    fontWeight: "200",
    width: 100,
    textAlign: "center"
  },
  buttonDigits: {
    color: "#FFFFFF",
    fontSize: 40,
    width: 53,
  },
});
