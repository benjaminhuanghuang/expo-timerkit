import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

type HIITSetting = {
  id: string;
  name: string;
  work: number;
  rest: number;
  rounds: number;
};

const hiitPresets: HIITSetting[] = [
  { id: "1", name: "Beginner HIIT", work: 20, rest: 10, rounds: 4 },
  { id: "2", name: "Fat Burner", work: 30, rest: 15, rounds: 6 },
  { id: "3", name: "Endurance Boost", work: 40, rest: 20, rounds: 8 },
];

export default function HIITListScreen() {
  const renderItem = ({ item }: { item: HIITSetting }) => (
    <Pressable
      onPress={() => console.log(`Selected: ${item.name}`)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>
        Work: {item.work}s · Rest: {item.rest}s · Rounds: {item.rounds}
      </Text>
    </Pressable>
  );

  return (
    <FlatList
      data={hiitPresets}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#2ecc71",
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  cardPressed: {
    backgroundColor: "#27ae60",
    transform: [{ scale: 0.98 }],
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  details: {
    fontSize: 14,
    color: "#ecf0f1",
  },
});
