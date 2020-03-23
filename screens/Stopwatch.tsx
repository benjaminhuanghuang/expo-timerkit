import React, { useState } from "react";
import { View, Text, Button, Platform, TouchableOpacity } from "react-native";

import { globalStyles, COLORS } from "../globalStyles";

import { RowContainer, RoundButton } from "../components";

enum StatusEnum {
  STOPPED,
  RUNNING
}
export const StopwatchScreen: React.SFC = (): JSX.Element => {
  const [s, set] = useState(0);
  const [status, setStatus] = useState(StatusEnum.STOPPED);

  const lapButtonTitle = status === StatusEnum.RUNNING ? "Lap" : "Reset";
  const runButtonTitle = status === StatusEnum.RUNNING ? "Stop" : "Start";
  const runButtonBGColor =
    status === StatusEnum.RUNNING
      ? COLORS.BUTTON_BACKGROUND_RED
      : COLORS.BUTTON_BACKGROUND_GEEEN;

  const onLapButtonClick = () => {
    if (status === StatusEnum.RUNNING) {
      createLap();
    }
  };

  const onRunButtonClick = () => {
    if (status === StatusEnum.STOPPED) {
      setStatus(StatusEnum.RUNNING);
    } else {
      setStatus(StatusEnum.STOPPED);
    }
  };

  const createLap = () => {};

  return (
    <View style={globalStyles.screenContainer}>
      <Text>dddd </Text>
      <RowContainer height={140}>
        <RoundButton
          color={COLORS.FRONTGROUND_COLOR}
          backgroundColor={COLORS.FRONTGROUND_COLOR_GRAY}
          width={180}
          height={80}
          borderRadius={10}
          onPress={onLapButtonClick}
          title={lapButtonTitle}
        />
        <RoundButton
          color={COLORS.FRONTGROUND_COLOR}
          backgroundColor={runButtonBGColor}
          width={180}
          height={80}
          borderRadius={10}
          onPress={onRunButtonClick}
          title={runButtonTitle}
        />
      </RowContainer>
    </View>
  );
};
