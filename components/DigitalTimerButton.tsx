import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

//
import { DigitalTimer } from "./digital-timer/DigitalTimer";
import { globalStyles, COLORS } from "../globalStyles";

interface DigitalTimerButtonProps {
  size: number;
  seconds: number; // number of seconds
  color?: string;
  pushedColor?: string;
  digitalStyle?: any;
  disabled: boolean;
  onChange?: (duration: number, count: number, isLast: boolean) => void;
  stop?:()=>void
}

export const DigitalTimerButton: React.FC<DigitalTimerButtonProps> = ({
  size,
  seconds, // number of seconds
  color = COLORS.BUTTON_BACKGROUND_GREY,
  pushedColor = COLORS.BUTTON_BACKGROUND_GEEEN,
  digitalStyle,
  disabled = false,
}): JSX.Element => {
  const [buttonRunning, setButtonRunning] = useState(false);

  const toggleButton = () => {
    setButtonRunning(!buttonRunning);
  };

  const onPress = () => {
    toggleButton();
  };

  const buttonShap = {
    width: size,
    height: size,
    borderRadius: 10, // Math.floor(size / 20),
  };

  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[styles.button, buttonShap, { backgroundColor: buttonRunning ? pushedColor : color }]}
      activeOpacity={0.7}
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
