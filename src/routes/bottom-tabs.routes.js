import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Text } from "react-native";

import CreateScreen from "../screens/ProductScreen";
import ReadScreen from "../screens/ManagementScreen";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tab() {
  return (
    <Navigator>
      <Screen name="Produtos" component={CreateScreen} />
      <Screen name="Gerenciamento" component={ReadScreen} />
    </Navigator>
  );
}
