import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//
import { globalStyles, COLORS } from "./globalStyles";

import {
  TimersScreen,
  SupportScreen,
  RunnerScreen,
  AboutScreen,
  EditorScreen,
  SettingsScreen,
  CountdownScreen
} from "./screens";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  const createRootBottomTabs = () => {
    return (
      <BottomTabs.Navigator tabBarOptions={
        { 
          activeTintColor: COLORS.ACTIVE_ICON_COLOR,
          style: { 
            height: 95,
            backgroundColor: COLORS.BACKGROUND_COLOR
          },
          labelStyle:
          {
            fontSize:15
          },
        }
      }>
        <BottomTabs.Screen
          name="timers"
          component={TimersScreen}
          options={{
            tabBarLabel: "Timers",
            tabBarIcon: ({color}) => (
              <Ionicons size={25} color={color} name="md-folder" />
            )
          }}
        />
         <BottomTabs.Screen
          name="countdown"
          component={CountdownScreen}
          options={{
            tabBarLabel: "Countdown",
            tabBarIcon: ({color}) => (
              <Ionicons color={color} size={25} name="ios-hourglass" />
            )
          }}
        />
        <BottomTabs.Screen
          name="suport"
          component={SupportScreen}
          options={{
            tabBarLabel: "Support",
            tabBarIcon: ({color}) => (
              <Ionicons color={color} size={25} name="md-flash" />
            )
          }}
        />
        <BottomTabs.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({color}) => (
              <Ionicons color={color} size={25} name="ios-settings" />
            )
          }}
        />
      </BottomTabs.Navigator>
    );
  };

  return (
    <View style={globalStyles.appContainer}>
      <NavigationContainer>{createRootBottomTabs()}</NavigationContainer>
    </View>
  );
}
