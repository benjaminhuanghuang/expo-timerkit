import React, { useState} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { RowContainer, DigitalTimer, DigitalTimerButton} from "../components";

import { globalStyles } from '../globalStyles';

 
export const CountdownScreen : React.FC= ():  JSX.Element =>{
  const  onTimerChange = (duration: number, count: number, isLast: boolean)=>{

  }
  return (
    <View style={globalStyles.screenContainer}>
       <RowContainer height={200}>
        <DigitalTimer timeElapsed={0} style={styles.digits} />
      </RowContainer>
      <ScrollView>
        <DigitalTimerButton duration={10} size={180} backgroundColor="#3D3D3D" digitalStyle={styles.buttonDigits}></DigitalTimerButton>
        <DigitalTimerButton duration={15} size={180} backgroundColor="#3D3D3D" digitalStyle={styles.buttonDigits}></DigitalTimerButton>
        <DigitalTimerButton  duration={35} size={180} backgroundColor="#3D3D3D" digitalStyle={styles.buttonDigits}></DigitalTimerButton>
        <DigitalTimerButton duration={45} size={180} backgroundColor="#3D3D3D" digitalStyle={styles.buttonDigits}></DigitalTimerButton>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
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
    width: 110,
  },
  buttonDigits: {
    color: "#FFFFFF",
    fontSize: 10,
    width: 40,
  },
});
