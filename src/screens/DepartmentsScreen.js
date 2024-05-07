import { View, Text, StyleSheet } from "react-native";

export default function DepartmentsScreen() {
  return (
    <View style={styles.container}>
      <Text>DEPARTMENT SCREEN</Text>
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
