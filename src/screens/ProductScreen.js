import { View, Text, StyleSheet } from "react-native";

export default function ProductsScreen({navigation}) {

  return (
    <View style={styles.container}>
      <Text>LIVRARIA</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input:{
    backgroundColor: "#fff",
    padding: 8,
    width: "60%",
    marginBottom: 12,
  },
  footer: {
        flex: 1,
        justifyContent: 'flex-end',
  },
});
