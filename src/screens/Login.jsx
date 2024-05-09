import { Text, View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { login } from "../services/auth";

export default function Login() {
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
      />
      <TextInput
        placeholder="DIGITE SUA SENHA"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="ENTRAR NO SITEMA"
        onPress={() => login("teste2@teste.com", "senha@123")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 8,
    width: "60%",
    marginBottom: 12,
  },
});
