import React, { useState, useEffect } from "react";
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
  onTimerRunning?: (seconds: number, restTime: number) => void;
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
  onTimerRunning
}): JSX.Element => {
  // current time
  const [now, setNow] = useState(0);
  // record the start
  const [start, setStart] = useState(0);

  const timeElapsed = now - start;
  const restTime = seconds * 1000 - timeElapsed;

  const secondsToShow = toggled ? restTime : seconds * 1000;
  //
  useEffect(() => {
    const interval = setInterval(() => {
      if (toggled) {
        const now = new Date().getTime();
        if ((now - start) >= seconds * 1000)
        {
          onUnToggle(id);
          setNow(0);
          setStart(0);
        }
        setNow(now);
        onTimerRunning(seconds, restTime)  
      }
    }, 100);
    return () => clearInterval(interval);
  }, [now]);

  const onPress = (id: number) => {
    if (toggled) {
      onUnToggle(id);
      setNow(0);
      setStart(0);
    } else {
      onToggle(id);
      const now = new Date().getTime();
      setStart(now);
      setNow(now);
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
      <DigitalTimer timeValue={secondsToShow} style={digitalStyle} showMilliSecond={false} />
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
