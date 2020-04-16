import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { RowContainer, DigitalTimer, DigitalTimerButton } from "../components";

import { globalStyles } from "../globalStyles";

interface ButtonData {
  seconds: number;
  disabled: boolean;
}
export const CountdownScreen: React.FC = (): JSX.Element => {
  let buttonsData: Array<ButtonData> = [
    {
      seconds: 10,
      disabled: false,
    },
    {
      seconds: 15,
      disabled: false,
    },
    {
      seconds: 20,
      disabled: false,
    },
    {
      seconds: 30,
      disabled: false,
    },
    {
      seconds: 45,
      disabled: false,
    },
    {
      seconds: 60,
      disabled: false,
    },
  ];

  const onTimerChange = (duration: number, count: number, isLast: boolean) => {};
  
  return (
    <View style={globalStyles.screenContainer}>
      <RowContainer height={160}>
        <DigitalTimer timeValue={0} style={styles.digits} />
      </RowContainer>
      <ScrollView contentContainerStyle={styles.buttons}>
        {buttonsData.map((button: ButtonData, index) => {
          return (
            <DigitalTimerButton
              seconds={button.seconds}
              disabled={button.disabled}
              size={180}
              digitalStyle={styles.buttonDigits}
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
