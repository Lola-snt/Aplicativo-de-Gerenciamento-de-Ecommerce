import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import { SignUp } from "../screens/signUp";

const { Navigator, Screen } = createStackNavigator();

export const PublicNavigation= () => {
  return (
    <Navigator>
      <Screen name="login" component={Login} />
      <Screen name="SingUp" component={SignUp} options={{headerShown: false}}/>
    </Navigator>
  );
};


