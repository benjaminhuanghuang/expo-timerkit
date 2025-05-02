import React from "react";
import { View, Text, StyleSheet, TextStyle } from "react-native";
//
import moment from "moment";
//
export interface DigitalTimerProps {
  timeValue: number; // number of milliseconds 
  style: any;
  showMilliSecond?: boolean;
}

export const DigitalTimer: React.FC<DigitalTimerProps> = ({
  timeValue,
  style,
  showMilliSecond = true,
}): JSX.Element => {
  const pad = (n) => (n < 10 ? "0" + n : n);

  const duration = moment.duration(timeValue);
  const mins = duration.minutes();
  const seconds = duration.seconds();
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  // -- This is not good because the position of the digit changes when the number is changing
  // const text = `${pad(mins)}:${pad(seconds)}.${pad(centiseconds)}`;
  //return <Text style={style}>{text}</Text>;
  const punctuationWidth = Math.floor(style.width/6);
  return (
    <View style={styles.timerContainer}>
      <Text style={style}>{pad(mins)}</Text>
      <Text style={[style,{width:punctuationWidth, textAlign:"left"}]}>:</Text>
      <Text style={style}>{pad(seconds)}{showMilliSecond}</Text>
      {showMilliSecond && <Text style={[style,{width:punctuationWidth, textAlign:"left"}]}>.</Text>}
      {showMilliSecond && <Text style={style}>{pad(centiseconds)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
