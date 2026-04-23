import { StyleSheet, Text, View } from "react-native";

export default function Classes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Classes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },
});
