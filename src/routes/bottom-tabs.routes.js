import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigation } from "./stack.routes";
import ProductsScreen from "../screens/ProductsScreen";
import ManagementScreen from "../screens/ManagementScreen";
import GroupMembers from "../screens/GroupMembers";

const { Navigator, Screen } = createBottomTabNavigator();

export default function PrivateNavigation() {
  return (
    <Navigator>
      <Screen name="ProductsScreen" component={ManagementScreen} />
      <Screen name="Gerenciamento" component={ProductsScreen} />
      <Screen name="Integrantes" component={GroupMembers}/>
    </Navigator>
  );
}
