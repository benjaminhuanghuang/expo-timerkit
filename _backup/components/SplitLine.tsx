import React from "react";
import { View} from "react-native";

//
import {COLORS } from "../globalStyles";


export const SplitLine: React.FC = (): JSX.Element => {
  return (
    <View style={{
      marginTop:20,
      height: 2,
      width: 80,
      backgroundColor: COLORS.FRONTGROUND_COLOR_GRAY,
  }}/>
  );
};
