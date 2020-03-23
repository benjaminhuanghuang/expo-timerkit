import React from "react";
import { StyleSheet, View } from "react-native";

interface RowContainerProps {
    children: any
}

export const RowContainer: React.SFC<RowContainerProps> = ({ children }) : JSX.Element=> {
  return <View style={styles.rowContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginTop: 30
  }
});
