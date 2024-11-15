import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useEffect } from "react";
import TrackPlayer from "react-native-track-player";

export default function RootLayout() {
  useEffect(() => {
    TrackPlayer.setupPlayer()
      .then(() => {
        console.log("Player ready");
      })
      .catch((error) => {
        console.log("Player setup error", error);
      });
  }, []);

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "formSheet",
            sheetAllowedDetents: "fitToContents",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
