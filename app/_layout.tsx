import { Slot, Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#3498db" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen name="hiit" options={{ headerShown: true, title: "" }} />
        <Stack.Screen
          name="countdown"
          options={{ title: "Countdown Timer", headerShown: false }}
        />
      </Stack>
    </SafeAreaView>
  );
}
