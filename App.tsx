import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//
import { Footer } from "./components";

import { globalStyles, COLORS } from "./globalStyles";

import {
  FavoriteScreen,
  RunnerScreen,
  AboutScreen,
  EditorScreen,
  PlansScreen,
} from "./screens";
import { SettingsScreen } from "./screens/Settings";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();


export default function App() {
  const rootNavigator = () => (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Favorite"
        children={createFavoriteStackNavigator}
        options={{ title: "Favorite" }}
      />
      <Drawer.Screen
        name="Plans"
        children={createPlansStackNavigator}
        options={{ title: "Plans" }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "About" }}
      />
    </Drawer.Navigator>
  );
  
  const createFavoriteStackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
      />
      <Stack.Screen
        name="Detail"
        component={RunnerScreen}
      />
    </Stack.Navigator>
  );

  const createPlansStackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Plans"
        component={PlansScreen}
      />
      <Stack.Screen
        name="Editor"
        component={EditorScreen}
      />
    </Stack.Navigator>
  );

  return (
    <View style={globalStyles.appContainer}>
      <NavigationContainer>{rootNavigator()}</NavigationContainer>
      <Footer>
      </Footer>
    </View>
  );
}
