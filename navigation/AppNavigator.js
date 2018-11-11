// Navigator for app screens and timer
import { createSwitchNavigator } from 'react-navigation';
//
import MainTabNavigator from "./MainTabNavigator";
import TimerScreen from "../screens/TimerScreen";

const AppNavigator = createSwitchNavigator({
    MainTab: MainTabNavigator,
    Timer: TimerScreen
}, {
        initialRouteName: 'MainTab'
    });

export default AppNavigator;