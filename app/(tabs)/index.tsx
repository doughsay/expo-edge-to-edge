import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Tab</Text>
      <Button title="Open Modal" onPress={() => router.navigate("/modal")} />
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
