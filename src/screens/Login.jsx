import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Cadastrar from "../screens/Cadatrar";

// const senhaReal = "funcionario";
// const emailReal = "1234";
export default function LoginScreen({ navigation }) {
  // const [email, setEmail] = useState("");
  // const [senha, setSenha] = useState("");
  const logo = "../../assets/logo.png";

  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <Image style={styles.logo} source={require(logo)} />
        <Text style={{ color: "#a61a1d", fontSize: 18 }}>Email: </Text>
        <TextInput
          style={styles.input}
          // placeholder=""
          // onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputCont}>
        <Text style={{ color: "#a61a1d", fontSize: 18 }}>Senha: </Text>
        <TextInput
          style={styles.input}
          placeholder=""
          // onChangeText={setSenha}
          secureTextEntry={true}
        />

         <Text
          style={{ color: "#a61a1d", fontSize: 17,  textAlign: "center",  marginVertical: 10, gap: 5}}>  É novo por aqui?
          <Button title="Me cadastrar 😁" color="#a61a1d" />
        </Text>
      </View>

      <View style={styles.inputCont}>
        <Button
          title="Entrar"
          color="#a61a1d"
          // onPress={() => {
          //   if (email == emailReal && senha == senhaReal) {
          //     navigation.navigate("Home");
          //   }
          // }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFF5EE",
  },
  inputCont: {
    width: "70%",
  },
  input: {
    fontSize: 30,
    borderWidth: 2,
    borderColor: "#a61a1d",
    backgroundColor: "#FFF5EE",
  },
  logo: {
    alignSelf: "center",
    height: 300,
    width: 300,
  },
});
