import { createBottomTabNavigator} from "react-navigation";

// App tab navigator
import PlanListScreen from "../screens/PlanListScreen";
import TrainScreen from "../screens/TrainScreen";
import EditorScreen from "../screens/EditorScreen";
import AnalysisScreen from "../screens/AnalysisScreen";
import SettingsScreen from "../screens/SettingsScreen";

const MinTabNavigator = createBottomTabNavigator({
  PlanList: PlanListScreen,
  Workout: TrainScreen,
  Editor: EditorScreen,
  Analysis: AnalysisScreen,
  Settins: SettingsScreen
}, {
      initialRouteName: 'PlanList'
  });

  export default MinTabNavigator;