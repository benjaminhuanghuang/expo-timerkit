import { StyleSheet } from "react-native";

export const COLORS = {
  BACKGROUND_COLOR: "#000000", // black
  FRONTGROUND_COLOR: "#FFFFFF",
  FRONTGROUND_COLOR_GRAY: "#7E7E7E",

  ACTIVE_ICON_COLOR: "#FF3D2D", // red
  INACTIVE_ICON_COLOR: "#7E7E7E", // red

  BUTTON_BACKGROUND_RED: "#EC5E39",
  BUTTON_BACKGROUND_GEEEN: "#3EF77D",
  BUTTON_FRONTGROUND: "#FFFFFF"
};

export const globalStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  screenContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  h1: {
    fontSize: 36,
    color: COLORS.FRONTGROUND_COLOR
  },
  h2: {
    fontSize: 30,
    color: COLORS.FRONTGROUND_COLOR
  },
  h3: {
    fontSize: 25,
    color: COLORS.FRONTGROUND_COLOR
  },
  text: {
    fontSize: 17,
    color: COLORS.FRONTGROUND_COLOR,
    lineHeight: 25
  },
  buttonGreen: {
    backgroundColor: COLORS.BUTTON_BACKGROUND_GEEEN,
    fontSize: 17,
    color: COLORS.FRONTGROUND_COLOR
  },
  buttonRed: {
    backgroundColor: COLORS.BUTTON_BACKGROUND_RED,
    fontSize: 17,
    color: COLORS.FRONTGROUND_COLOR,
    lineHeight: 25
  }
});
