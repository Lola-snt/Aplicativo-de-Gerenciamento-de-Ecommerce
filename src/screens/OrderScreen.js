import { View, Text, StyleSheet } from "react-native";

export default function OrderScreen() {
  return (
    <View style={styles.container}>
      <Text>ORDER SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
