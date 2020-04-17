import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { RowContainer, DigitalTimer, DigitalTimerButton } from "../components";

import { globalStyles, COLORS } from "../globalStyles";

interface ButtonData {
  seconds: number;
  disabled: boolean;
  toggled: boolean;
}
export const CountdownScreen: React.FC = (): JSX.Element => {
  let initButtonsData: Array<ButtonData> = [
    {
      seconds: 10,
      disabled: false,
      toggled: false,
    },
    {
      seconds: 15,
      disabled: false,
      toggled: false,
    },
    {
      seconds: 20,
      disabled: false,
      toggled: false,
    },
    {
      seconds: 30,
      disabled: false,
      toggled: false,
    },
    {
      seconds: 45,
      disabled: false,
      toggled: false,
    },
    {
      seconds: 60,
      disabled: false,
      toggled: false,
    },
  ];

  const [buttonsData, setButtonData] = useState(initButtonsData);
  const [time, setTime] = useState(0);
  const [bgColor, setBgColor] = useState(COLORS.BACKGROUND_COLOR);
  const screenWidth = Math.round(Dimensions.get("window").width);

  return (
    <View style={[globalStyles.screenContainer, { backgroundColor: bgColor }]}>
      <RowContainer height={140}>
        <DigitalTimer timeValue={time} style={styles.digits} />
      </RowContainer>
      <ScrollView contentContainerStyle={styles.buttons}>
        {buttonsData.map((button: ButtonData, index) => {
          return (
            <DigitalTimerButton
              size={screenWidth / 2 - 50}
              digitalStyle={styles.buttonDigits}
              seconds={button.seconds}
              disabled={button.disabled}
              toggled={button.toggled}
              id={index}
              onToggle={(id) => {
                const newData = buttonsData.map((data, i) => {
                  const toggled = i === id;
                  return { ...data, toggled };
                });
                setButtonData(newData);
              }}
              onUnToggle={(id) => {
                const newData = buttonsData.map((data, index) => {
                  const toggled = false;
                  return { ...data, toggled };
                });
                setButtonData(newData);
                setTime(0);
                setBgColor(COLORS.BACKGROUND_COLOR);
              }}
              onTimerRunning={(rest, seconds) => {
                setTime(rest);
                if (rest === 0) {
                  setBgColor(COLORS.BACKGROUND_COLOR);
                } else if (rest < 3000) {
                  if (bgColor === COLORS.BACKGROUND_COLOR) {
                    setBgColor(COLORS.ACTIVE_ICON_COLOR);
                  } else {
                    setBgColor(COLORS.BACKGROUND_COLOR);
                  }
                }
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPushed: {},
  digits: {
    color: "#FFFFFF",
    fontSize: 76,
    fontWeight: "200",
    width: 100,
    textAlign: "center",
  },
  buttonDigits: {
    color: "#FFFFFF",
    fontSize: 40,
    width: 53,
  },
});
