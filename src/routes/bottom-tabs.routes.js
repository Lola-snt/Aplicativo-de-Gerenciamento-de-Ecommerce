import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigation } from "./stack.routes";
import ProductsScreen from "../screens/ProductsScreen";
import GroupMembers from "../screens/GroupMembers";
import DetailsScreen from "../screens/DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CreateBookScreen from "../screens/CreateProductScreen";
import EditBookScreen from "../screens/EditProductScreen";
import Cadastrar from "../screens/Cadatrar";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function PrivateNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#667080",
        tabBarInactiveTintColor: "#EEF1F4",
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Gestao"
        component={Produtos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-analytics"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Integrantes"
        component={GroupMembers}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="people" color={color} size={size} />;
            }
            return <Ionicons name="people-outline" color={color} size={size} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function Produtos() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produtos"
        component={ProductsScreen}
        options={({}) => ({
          title: "Lista de Livros",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#a61a1d",
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "500",
          },
        })}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetailsScreen}
        options={({}) => ({
          title: "Detalhes do Livro",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#a61a1d",
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "500",
          },
        })}
      />
      <Stack.Screen
        name="Adicionar"
        component={CreateBookScreen}
        options={({}) => ({
          title: "Adicionar Livro",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#a61a1d",
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "500",
          },
        })}
      />
      <Stack.Screen
        name="Editar"
        component={EditBookScreen}
        options={({}) => ({
          title: "Editar Livro",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#a61a1d",
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "500",
          },
        })}
      />
      <Stack.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={({}) => ({
          title: "Cadastrar Usuário",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#a61a1d",
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "500",
          },
        })}
      />
    </Stack.Navigator>
  );
}
