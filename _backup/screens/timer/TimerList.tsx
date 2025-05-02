import React, { useState } from "react";
import { View, Text, Button, Platform, TouchableOpacity , StyleSheet} from "react-native";

import { globalStyles, COLORS } from "../../globalStyles";
//
import {TimerListItem} from "./TimerListItem"

interface TimerListProps{
  timers: Array<ITimer>
}

export const TimerList: React.FC<TimerListProps> = ({timers}): JSX.Element => {
  return (
    <View style={styles.timerListContainer}>
        {timers.map((timer:ITimer, i:number)=>{
          return <TimerListItem key={i} timer={timer}/>
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  timerListContainer: {
    alignItems: "center",
  }
});
