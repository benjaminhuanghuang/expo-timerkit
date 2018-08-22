import React from "react";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";

// App navigator
import TimerScreen from "./screens/TimerScreen";
import EditorScreen from "./screens/EditorScreen";
import AnalysisScreen from "./screens/AnalysisScreen";
import SettingsScreen from "./screens/SettingsScreen";



const AppNavigator = createBottomTabNavigator({
    Timer: TimerScreen,
    Editor: EditorScreen,
    Analysis: AnalysisScreen,
    Settins: SettingsScreen
}, {
        initialRouteName: 'Timer'
    });

export default AppNavigator;