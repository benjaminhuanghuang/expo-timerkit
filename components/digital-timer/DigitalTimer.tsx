import React from "react";
import { View, Text, StyleSheet } from "react-native";
//
import moment from "moment";
//
export interface DigitalTimerProps {
  elapsedTime: number;
  style: any;
}

export const DigitalTimer: React.SFC<DigitalTimerProps> = ({
  elapsedTime,
  style
}): JSX.Element => {
  const pad = n => (n < 10 ? "0" + n : n);

  const duration = moment.duration(elapsedTime);
  const mins = duration.minutes();
  const seconds = duration.seconds();
  const centiseconds = Math.floor(duration.milliseconds() / 10);

  const text = `${pad(mins)}:${pad(seconds)}.${pad(centiseconds)}`;
  return <Text style={style}>{text}</Text>;
};
