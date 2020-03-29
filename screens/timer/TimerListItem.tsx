import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Platform,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { globalStyles, COLORS } from "../../globalStyles";
//

interface TimerListItem {
  timer: ITimer;
}

export const TimerListItem: React.FC<TimerListItem> = ({
  timer
}): JSX.Element => {
  return (
    <View style={styles.timerListItemContainer}>
      <Ionicons size={25} name="ios-timer" color={COLORS.ACTIVE_ICON_COLOR} />
      <View style={styles.timerListItemTextContainer}>
        <Text style={styles.timerListItemName}>asfasfasfasf</Text>
        <Text style={styles.timerListItemSubtitle}>asfasfasfasf</Text>
      </View>
      <Ionicons size={25} name="ios-settings" color={COLORS.ACTIVE_ICON_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  timerListItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
    paddingHorizontal:10,
    backgroundColor: COLORS.BACKGROUND_COLOR_GRAY,
    height:60
  },
  timerListItemTextContainer: {
    paddingLeft:10,
    flexDirection: "column",
    justifyContent:"flex-start",
    flex: 1
  },
  timerListItemName: {
    color: COLORS.FRONTGROUND_COLOR
  },
  timerListItemSubtitle: {
    color: COLORS.FRONTGROUND_COLOR
  }
});
