import { View, Text, StyleSheet, Button } from "react-native";

export default function ManagementScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>MANAGEMENT SCREEN</Text>
      <Button
        title="Teste navegação GroupMembers"
        onPress={() => navigation.navigate("GroupMembers")}
      />
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
