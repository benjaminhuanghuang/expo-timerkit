import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

type ButtonItem = {
  title: string;
  path: string;
  icon: React.ComponentProps<typeof FontAwesome5>["name"];
};

const BUTTONS: ButtonItem[] = [
  { icon: "hourglass", title: "HIIT Timer", path: "/hiit/(tabs)/list" },
  { icon: "stopwatch-20", title: "Countdown Timer", path: "/countdown" },
];

export default function HomeScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: (typeof BUTTONS)[number] }) => (
    <Pressable
      style={styles.button}
      onPress={() => router.push(item.path as string)}
    >
      <FontAwesome5
        name={item.icon}
        size={28}
        color="#fff"
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>{item.title}</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={BUTTONS}
      numColumns={2}
      keyExtractor={(item) => item.path}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  button: {
    flex: 1,
    margin: 8,
    backgroundColor: "#3498db",
    paddingVertical: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    color: "#fff",
    marginBottom: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
