import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

const countdownDurations = [
  "1m",
  "45s",
  "30s",
  "20s",
  "15s",
  "10s",
  "5s",
  "2m",
];

export default function CountdownListScreen() {
  const renderItem = ({ item }: { item: string }) => (
    <Pressable
      style={({ pressed }) => [
        styles.item,
        pressed && styles.itemPressed, // 👈 Apply pressed effect
      ]}
    >
      <Text style={styles.text}>{item}</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={countdownDurations}
      keyExtractor={(item) => item}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  item: {
    flex: 1,
    backgroundColor: "#3498db",
    paddingVertical: 24,
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemPressed: {
    backgroundColor: "#2980b9",
    transform: [{ scale: 0.97 }], // 👈 subtle scale effect
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
