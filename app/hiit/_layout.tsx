import { Stack } from "expo-router";
export default function HIITTabsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#3498db" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="list" options={{ headerShown: false }} />
      <Stack.Screen name="runner" options={{ headerShown: false, title: "" }} />
      <Stack.Screen name="editor" options={{ title: "", headerShown: false }} />
    </Stack>
  );
}
