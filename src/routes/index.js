import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'; //Importando a tela de login. 

import {PrivateNavigation} from "./bottom-tabs.routes";//Importando a tela inicial do ecommerce 
import {PublicNavigation} from "./public.routes";

const Stack = createStackNavigator();
const logado = true; //Ligada a variável de controle.

const PrivateNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="bottom-tabs.routes" component={PrivateNavigation} />
      <Stack.Screen name="public.routes" component={PublicNavigation} />
    </Stack.Navigator>
  );
};

const PublicNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
 const Routes= ()  => {
  const logado = true;
  return <>{logado ? <PrivateNavigation/> : <PublicNavigation/>}</>;
}


export default Routes;