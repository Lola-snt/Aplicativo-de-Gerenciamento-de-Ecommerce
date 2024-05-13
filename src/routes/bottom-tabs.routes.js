import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigation } from "./stack.routes";
import ProductsScreen from "../screens/ProductsScreen";
import GroupMembers from "../screens/GroupMembers";
import DetailsScreen from "../screens/DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CreateBookScreen from "../screens/CreateProductScreen";
import EditBookScreen from "../screens/EditProductScreen";
import Cadastrar from "../screens/Cadatrar";
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function PrivateNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#A51C1D',
      
      
      tabBarStyle: {
        backgroundColor: '#FFF5EE',
        borderTopWidth: 0,
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 25, 
      }
    }}
    >
      
      <Tab.Screen 
      name="Gestao" 
      component={Produtos} 
      options={{
        tabBarIcon: ({ color, size}) => (
          <MaterialCommunityIcons name="home-analytics" color={color} size={size} />
        ),
        headerShown: false}}/>
      <Tab.Screen 
      name="Integrantes" 
      component={GroupMembers} 
      options={{
        tabBarIcon: ({ color, size, focused }) => {
          if(focused){
            return  <Ionicons name="people" color={color} size={size} />
          }
          return  <Ionicons name="people-outline" color={color} size={size} />
        },
        headerShown: false}}/>
    </Tab.Navigator>
  );
}

function Produtos() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Produtos" component={ProductsScreen} />
    <Stack.Screen name="Detalhes" component={DetailsScreen} />
    <Stack.Screen name="Adicionar" component={CreateBookScreen}/>
    <Stack.Screen name="Editar" component={EditBookScreen}/>
    <Stack.Screen name="Cadastrar" component={Cadastrar}/>
    
  </Stack.Navigator>
  )
}