import React from "react";
import { View} from "react-native";

//
import {COLORS } from "../globalStyles";


export const SplitLine: React.SFC = (): JSX.Element => {
  return (
    <View style={{
      marginTop:20,
      height: 2,
      width: 80,
      backgroundColor: COLORS.FONT_COLOR_DARK,
  }}/>
  );
};
