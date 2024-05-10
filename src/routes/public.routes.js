import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import { SignUp } from "../screens/signUp";

const { Navigator, Screen } = createStackNavigator();

const PublicStack = () => {
  return (
    <Navigator>
      <Screen name="login" component={Login} />
      <Screen name="SingUp" component={SignUp} options={{headerShown: false}}/>
    </Navigator>
  );
};

export default PublicStack;
