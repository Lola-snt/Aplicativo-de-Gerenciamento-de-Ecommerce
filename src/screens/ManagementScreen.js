import { View, Text, StyleSheet } from "react-native";

export default function ManagementScreen() {
  return (
    <View style={styles.container}>
      <Text>MANAGEMENT SCREEN</Text>
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
