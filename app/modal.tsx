import { StyleSheet, Text, View } from "react-native";

export default function BarTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FormSheet Modal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 64,
    backgroundColor: "#222222",
  },
  text: {
    color: "white",
  },
});
