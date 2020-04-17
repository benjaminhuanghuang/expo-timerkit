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
  id: number;
  toggled: boolean;
  onToggle: (key: number) => void;
  onUnToggle: (key: number) => void;
  onChange?: (duration: number, count: number, isLast: boolean) => void;
  stop?: () => void;
}

export const DigitalTimerButton: React.FC<DigitalTimerButtonProps> = ({
  size,
  seconds, // number of seconds
  color = COLORS.BUTTON_BACKGROUND_GREY,
  pushedColor = COLORS.BUTTON_BACKGROUND_GEEEN,
  digitalStyle,
  disabled = false,
  id,
  toggled,
  onToggle,
  onUnToggle,
}): JSX.Element => {
  const onPress = (id: number) => {
    if (toggled) {
      onUnToggle(id);
    } else {
      onToggle(id);
    }
  };

  const buttonShap = {
    width: size,
    height: size,
    borderRadius: 10, // Math.floor(size / 20),
  };
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress(id)}
      style={[styles.button, buttonShap, { backgroundColor: toggled ? pushedColor : color }]}
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
