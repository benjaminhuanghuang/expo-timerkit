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

  const lapButtonTitle = (status === StatusEnum.RUNNING) ? 'Lap':'Reset';
  const runButtonTitle = (status === StatusEnum.RUNNING) ? 'Stop':'Start'

  return (
    <View style={globalStyles.screenContainer}>
      <Text>dddd </Text>
      <RowContainer height={140}>
        <RoundButton 
          color={COLORS.FRONTGROUND_COLOR} 
          backgroundColor={COLORS.BUTTON_BACKGROUND_GEEEN}
          width={180}
          height={80}
          borderRadius={10}
          onPress={() => alert("This is a button!")}
          title={lapButtonTitle}
        />
        <RoundButton 
          color={COLORS.FRONTGROUND_COLOR} 
          backgroundColor={COLORS.BUTTON_BACKGROUND_RED}
          width={180}
          height={80}
          borderRadius={10}
          onPress={() => alert("This is a button!")}
          title={runButtonTitle}
        />
      </RowContainer>
    </View>
  );
};
