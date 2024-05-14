import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import { SignUp } from "../screens/signUp";

const { Navigator, Screen } = createStackNavigator();
const logado = false;


export const PublicNavigation= () => {
  return (
    <Navigator>
    {!logado && <Screen name="Login" component={LoginScreen} />}
    {/* A tela de cadastro será renderizada apenas se o usuário estiver logado */}
    {logado && <Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />}
  </Navigator>
  );
};


