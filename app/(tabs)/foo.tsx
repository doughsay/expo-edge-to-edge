import { StyleSheet, Text, View } from "react-native";

export default function FooTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Foo Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    color: "white",
  },
});
