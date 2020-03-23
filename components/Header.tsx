import React from "react";

import { View, Text, StyleSheet } from "react-native";
//
import { COLORS } from "../globalStyles";
//
export interface HeaderProps {
  title: string;
  children: any;
}

export const Header: React.SFC<HeaderProps> = ({
  title = "Header...",
  children
}): JSX.Element => {
  return (
    <View style={styles.header}>
      {children}
      <Text style={styles.title}> {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    height: 60,
    padding: 15,
    fontWeight: "bold",
    fontSize: 23,
    color: COLORS.TITLE_COLOR
  }
});
