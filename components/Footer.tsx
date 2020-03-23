import React from "react";
import { StyleSheet, View } from "react-native";


interface FooterProps {
  children: any;
}
export const Footer: React.SFC<FooterProps> = ({ children }): JSX.Element => {
  return <View style={styles.footer}>{children}</View>;
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between"
  }
});
