import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthContextProvider from "./src/context/auth-context";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
