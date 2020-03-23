import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface RoundButtonProps {
  width: number;
  height: number;
  borderRadius?: number;
  title: string;
  color?: string;
  backgroundColor?: string;
  onPress: any;
  disabled?: boolean;
}

export const RoundButton: React.SFC<RoundButtonProps> = ({
  width,
  height,
  borderRadius = 0,
  title,
  color,
  backgroundColor,
  onPress,
  disabled = false
}): JSX.Element => {
  const buttonStyle = {
    width,
    height,
    borderRadius
  };
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[styles.buttonContainer, buttonStyle]}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <View
        style={[
          buttonStyle,
          { backgroundColor, justifyContent: "center", alignItems: "center" }
        ]}
      >
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
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default RoundButton;
