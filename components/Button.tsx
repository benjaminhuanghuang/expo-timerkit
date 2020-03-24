import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface ButtonProps {
  width: number;
  height: number;
  borderRadius?: number;
  title: string;
  color?: string;
  backgroundColor?: string;
  onPress: any;
  disabled?: boolean;
}

export const Button: React.SFC<ButtonProps> = ({
  width,
  height,
  borderRadius = 0,
  title,
  color,
  backgroundColor,
  onPress,
  disabled = false
}): JSX.Element => {
  const buttonShape = {
    width,
    height,
    borderRadius
  };
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[styles.buttonContainer, buttonShape]}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <View style={[styles.buttonBorder, buttonShape, { backgroundColor }]}>
        <Text style={[styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonBorder: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }
});