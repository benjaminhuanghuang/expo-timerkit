import React, { Component } from "react";
import { View, Text, Button, Platform, TouchableOpacity } from "react-native";

import { globalStyles } from "../globalStyles";

export const AboutScreen: React.SFC = (): JSX.Element => {
  return (
    <>
      <Text style={globalStyles.h3}>About...</Text>
    </>
  );
};
