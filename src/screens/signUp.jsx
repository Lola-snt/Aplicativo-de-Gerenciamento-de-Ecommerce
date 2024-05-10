import { View, StyleSheet, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function SignUp({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.container2}>
        <Text style={{ fontSize: 25 }}>Cadastro de Usuário</Text>
        <TextInput
          style={style.textInput}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={style.textInput}
          placeholder="Senha"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={style.toucheOpacity}
          onPress={() => navigation.navigate("login")}
        >
          <Text>Voltar para login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    width: "80%",
    height: "70%",
    gap: 20,
    backgroundColor: "white",
    borderRadius: 15,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 2,
    width: "70%",
    height: "8%",
    paddingLeft: 5,
  },
  toucheOpacity: {
    width: "100%",
    height: "30%",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
