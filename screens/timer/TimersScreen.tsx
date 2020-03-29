import React, {  useState } from "react";
import { View, ScrollView, Text, Button, Platform, TouchableOpacity } from "react-native";

import { globalStyles } from "../../globalStyles";
//
import {TimerType} from "../../enums"

import {TimerList} from "./TimerList"


const initialTimers: Array<RoundTimer| HIITTimer> = [
  {
    warmUp: 10,
    name: "Kickboxing Spar",
    type: TimerType.ROUND_TIMER,
    coolDown: 10,
    comments: "",
    infinite: false,
    round: 2,
    rountdDuration: 180, // secondes
    resetDurationBetweenRound: 60 // secondes
  },
  {
    warmUp: 10,
    name: "My Conditioning",
    type: TimerType.HIIT_TIMER,
    coolDown: 10,
    comments: "",
    infinite: false,
    numberOfWorks: 8,
    workInterval: 30, // secondes
    resetInterval: 15, // secondes
    resetIntervalBetweenSet: 40,
    numberOfSets: 4
  }
];

export const TimersScreen: React.FC = (): JSX.Element => {
  const [timers, setTimers] = useState(initialTimers);

  return (
    <ScrollView style={globalStyles.screenContainer}>
       <TimerList timers={timers} />
    </ScrollView>
  );
};
