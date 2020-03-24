import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface RoundButtonProps {
  diameter: number;
  title: string;
  color?: string;
  backgroundColor?: string;
  onPress: any;
  disabled?: boolean;
}

export const RoundButton: React.SFC<RoundButtonProps> = ({
  diameter,
  title,
  color,
  backgroundColor,
  onPress,
  disabled = false
}): JSX.Element => {
  const buttonShap = {
    width: diameter,
    height: diameter,
    borderRadius: Math.floor(diameter / 2)
  };

  const buttonBorderShap = {
    width: diameter - 4,
    height: diameter - 4,
    borderRadius: Math.floor((diameter - 4) / 2)
  };
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[styles.buttonContainer, buttonShap, { backgroundColor }]}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <View
        style={[styles.buttonBorder, buttonBorderShap, { backgroundColor }]}
      >
        <Text style={[styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonBorder: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTitle: {
    fontSize: 18,
    // fontWeight: "bold"
  }
});

export default RoundButton;
