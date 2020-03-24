import React from "react";
import { View, Text, StyleSheet } from "react-native";
//
import moment from "moment";
//
export interface DigitalTimerProps {
  timeElapsed: number;
  style: any;
}

export const DigitalTimer: React.SFC<DigitalTimerProps> = ({
  timeElapsed,
  style
}): JSX.Element => {
  const pad = n => (n < 10 ? "0" + n : n);

  const duration = moment.duration(timeElapsed);
  const mins = duration.minutes();
  const seconds = duration.seconds();
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  // -- This is not good because the position of the digit changes when the number is changing
  // const text = `${pad(mins)}:${pad(seconds)}.${pad(centiseconds)}`;
  //return <Text style={style}>{text}</Text>;
  return (
    <View style={styles.timerContainer}>
    <Text style={style}>{pad(mins)}:</Text>
    <Text style={style}>{pad(seconds)}.</Text>
    <Text style={style}>{pad(centiseconds)}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  timerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
})