import { useContext } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import { createUser } from "../services/auth";
import { login } from "../services/auth";

export default function NewTask() {
  return (
    <View style={styles.container}>
      <Button
        title="Criar Usuário"
        onPress={() => createUser("teste2@teste.com", "senha@123")}
      />

      <Button
        title="Logar no Sistema"
        onPress={() => login("teste2@teste.com", "senha@123")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
