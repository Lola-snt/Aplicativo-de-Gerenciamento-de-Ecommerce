import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Text } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import DepartmentsScreen from "../screens/DepartmentsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import OrderScreen from "../screens/OrderScreen";
import UserScreen from "../screens/UserScreen";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tab() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Departamentos" component={DepartmentsScreen} />
      <Screen name="Favoritos" component={FavoritesScreen} />
      <Screen name="Sacola" component={OrderScreen} />
      <Screen name="Conta" component={UserScreen} />
    </Navigator>
  );
}
