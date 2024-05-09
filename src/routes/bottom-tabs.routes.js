import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Text } from "react-native";
import { StackNavigation } from "./stack.routes";
import ProductScreen from "../screens/ProductScreen";
import ReadScreen from "../screens/ManagementScreen";
import ProductsScreen from "../screens/ProductsScreen";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tab() {
  return (
    <Navigator>
      <Screen name="ProductsScreen" component={ProductsScreen} />
      <Screen name="Gerenciamento" component={StackNavigation} />
    </Navigator>
  );
}
