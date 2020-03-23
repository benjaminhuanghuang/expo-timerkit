import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//
import { COLORS } from "../globalStyles";

export interface HeaderButtonProps {
  navigation: any
}

export const HeaderButton: React.SFC<HeaderButtonProps> = ({navigation}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="ios-menu" style={styles.icon} onPress={() => {navigation.openDrawer();}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    left: 10,
    position:"absolute"
  },
  icon: {
    color: COLORS.TITLE_COLOR,
    fontSize: 32,
  }
});
