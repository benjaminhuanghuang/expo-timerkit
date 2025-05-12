import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

const predefinedDurations = ["1m", "40s", "20s", "2m", "30s", "10s"];
const recentDurations = ["40s", "20s", "3m"];

export default function CountdownListScreen() {
  const [recentItems, setRecentItems] = useState(recentDurations);
  const renderItem = ({ item }: { item: string }, canRemove = false) => (
    <View style={styles.itemContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.item,
          pressed && styles.itemPressed, //
        ]}
      >
        <Text style={styles.text}>{item}</Text>
      </Pressable>
      {/* X button to remove item */}
      {canRemove && (
        <Pressable
          style={styles.removeButton}
          onPress={() => handleRemoveRecentItem(item)}
        >
          <Text style={styles.removeButtonText}>X</Text>
        </Pressable>
      )}
    </View>
  );

  const handleCreateCustomDuration = () => {
    router.push({
      pathname: "/countdown/editor",
      params: {
        title: "Custom Duration",
      },
    });
  };
  const handleRemoveRecentItem = (item: string) => {};
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
            renderItem={(item) => renderItem(item, true)}
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
  itemContainer: {
    position: "relative", // Necessary for absolute positioning of the remove button
    marginBottom: 16, // Space between items
  },
  item: {
    backgroundColor: "#2ecc71",
    padding: 16,
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  removeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#e74c3c",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
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
