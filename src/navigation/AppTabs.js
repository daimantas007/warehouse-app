import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WarehouseScreen from "../screens/WarehouseScreen";
import ScanScreen from "../screens/ScanScreen";
import OutgoingScreen from "../screens/OutgoingScreen";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sandėlis" component={WarehouseScreen} />
      <Tab.Screen name="Skenuoti" component={ScanScreen} />
      <Tab.Screen name="Išvykusios" component={OutgoingScreen} />
    </Tab.Navigator>
  );
}
