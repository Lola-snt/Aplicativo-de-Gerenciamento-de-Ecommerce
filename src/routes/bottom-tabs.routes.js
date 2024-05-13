import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigation } from "./stack.routes";
import ProductsScreen from "../screens/ProductsScreen";
import GroupMembers from "../screens/GroupMembers";
import DetailsScreen from "../screens/DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CreateBookScreen from "../screens/CreateProduct";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function PrivateNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Produtos" component={Produtos} options={{headerShown: false}}/>
      <Tab.Screen name="Integrantes" component={GroupMembers}/>
    </Tab.Navigator>
  );
}

function Produtos() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Produtos" component={ProductsScreen} />
    <Stack.Screen name="Detalhes" component={DetailsScreen} />
    <Stack.Screen name="Adicionar" component={CreateBookScreen}/>
  </Stack.Navigator>
  )
}