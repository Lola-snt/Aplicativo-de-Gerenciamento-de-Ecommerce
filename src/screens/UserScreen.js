import { View, Text, StyleSheet } from "react-native";

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text>USER SCREEN</Text>
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
