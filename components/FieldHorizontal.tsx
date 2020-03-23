import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface FieldHorizontalProps {
  label: string;
  value: string | number;
  color: string;
}

export const Fieldhorizontal: React.SFC<FieldHorizontalProps> = ({
  label,
  value,
  color
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color }]}>{label}</Text>
      <Text style={[styles.value, { color }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  label: {
    fontSize: 18,
    fontWeight: "500"
  },

  value: {
    fontSize: 14,
    fontWeight: "300"
  }
});
