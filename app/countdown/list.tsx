import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const predefinedDurations = ["1m", "40s", "20s", "2m", "30s", "10s"];
const recentDurations = ["40s", "20s", "3m"];

export default function CountdownListScreen() {
  const [recentItems, setRecentItems] = useState(recentDurations);
  const renderItem = ({ item }: { item: string }) => (
    <Pressable
      style={({ pressed }) => [
        styles.item,
        pressed && styles.itemPressed, //
      ]}
    >
      <Text style={styles.text}>{item}</Text>
    </Pressable>
  );
  const handleCreateCustomDuration = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleCreateCustomDuration}
      >
        <Text style={styles.createButtonText}>Custom Duration</Text>
      </TouchableOpacity>
      {/* Recent Used Section */}
      {recentItems.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>Recent Used</Text>
          <FlatList
            data={recentItems}
            keyExtractor={(item) => item}
            horizontal={true} // This can be set to true if you want a horizontal scroll for recent items
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      )}

      {/* Predefined Section */}
      <Text style={styles.sectionTitle}>Predefined Durations</Text>
      <FlatList
        data={predefinedDurations}
        keyExtractor={(item) => item}
        numColumns={3} // For grid layout
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#34495e", // Color for section title
  },
  listContainer: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: "#2ecc71",
    padding: 16,
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    color: "#fff",
  },
  createButton: {
    backgroundColor: "#3498db", // Blue color for the button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20, // Space between the button and title
  },
  createButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
