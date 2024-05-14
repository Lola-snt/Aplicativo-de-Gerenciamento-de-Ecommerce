import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { login } from "../services/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const token = await login(email, password);
    console.log(token);
  };

  return (
    <View style={styles.container}>
      <Text>Página de Login</Text>
      <TextInput
        placeholder="DIGITE SEU EMAIL"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="DIGITE SUA SENHA"
        style={styles.input}
        value={password}
        keyboardType="numeric"
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => login("teste2@teste.com", "senha@123")}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SingUp")}
      >
        <Text>Cadastar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 8,
    width: "60%",
    marginBottom: 12,
  },
  button: {
    width: "35%",
    height: "5%",
    backgroundColor: "white",
  },
});
