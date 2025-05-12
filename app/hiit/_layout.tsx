import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default function HIITTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3498db",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="list"
        options={{
          title: "Timer List",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="runner"
        options={{
          title: "Runner",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="play-circle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="editor"
        options={{
          title: "Editor",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="edit" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
