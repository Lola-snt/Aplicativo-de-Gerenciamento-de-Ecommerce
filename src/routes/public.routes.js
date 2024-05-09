import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";

const { Navigator, Screen } = createStackNavigator();

const PublicStack = () => {
  return (
    <Navigator>
      <Screen name="login" component={Login} />
    </Navigator>
  );
};

export default PublicStack;
