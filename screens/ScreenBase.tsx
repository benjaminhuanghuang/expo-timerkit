import React, { Component } from "react";
import { View, Text, Button, Platform, TouchableOpacity } from "react-native";

import { globalStyles } from "../globalStyles";
//
import { Header } from "../components";

export interface ContactScreenProps {
  navigation: any
}
export const ContactScreen: React.SFC<ContactScreenProps> = ({navigation}): JSX.Element => {
  return (
    <View style={globalStyles.screenContainer}>
      <Header title="Screen" navigation={navigation}/>
      <Text style={globalStyles.h3}>Feed</Text>
      <Button title="Go to" onPress={() => {}}></Button>
    </View>
  );
};
