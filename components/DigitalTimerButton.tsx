import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

//
import { DigitalTimer } from "./digital-timer/DigitalTimer";

interface DigitalTimerButtonProps {
  size: number;
  seconds: number; // number of seconds
  backgroundColor?: string;
  digitalStyle?: any;
  onChange?: (duration: number, count: number, isLast: boolean) => void;
}

export const DigitalTimerButton: React.FC<DigitalTimerButtonProps> = ({
  size,
  seconds, // number of seconds
  backgroundColor,
  digitalStyle,
}): JSX.Element => {
  const [buttonRunning, setButtonRunning] = useState(false);

  const toggleButton = () => {
    setButtonRunning(!buttonRunning);
  };

  const buttonShap = {
    width: size,
    height: size,
    borderRadius: 10, // Math.floor(size / 20),
  };

  return (
    <TouchableOpacity
      onPress={() => toggleButton()}
      style={[styles.button, buttonShap, { backgroundColor }]}
      activeOpacity={buttonRunning ? 1 : 0.7}
    >
      <DigitalTimer timeValue={seconds * 1000} style={digitalStyle} showMilliSecond={false} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
