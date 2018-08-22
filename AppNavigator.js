import React from "react";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

// App tab navigator
import TrainScreen from "./screens/TrainScreen";
import EditorScreen from "./screens/EditorScreen";
import AnalysisScreen from "./screens/AnalysisScreen";
import SettingsScreen from "./screens/SettingsScreen";

const AppTabNavigator = createBottomTabNavigator({
    HIT: TrainScreen,
    Editor: EditorScreen,
    Analysis: AnalysisScreen,
    Settins: SettingsScreen
}, {
        initialRouteName: 'HIT'
    });

// Navigator for app screens and timer
import TimerScreen from "./screens/TimerScreen";

const AppNavigator = createSwitchNavigator({
    AppTabs: AppTabNavigator,
    Timer: TimerScreen
}, {
        initialRouteName: 'AppTabs'
    });

export default AppNavigator;