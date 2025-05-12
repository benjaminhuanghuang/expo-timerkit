import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
  const handleRun = (item: HIITSetting) => {
    console.log("Run:", item);
    // Navigate to runner page with preset values
  };

  const handleEdit = (item: HIITSetting) => {
    console.log("Edit:", item);
    // Navigate to editor with preset values
  };
  const handleDelete = (itemId: string) => {};
  const renderItem = ({ item }: { item: HIITSetting }) => (
    <View style={styles.card}>
      <View style={styles.leftColumn}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>
          Work: {item.work}s · Rest: {item.rest}s · Rounds: {item.rounds}
        </Text>
      </View>
      <View style={styles.rightColumn}>
        <TouchableOpacity style={styles.button} onPress={() => handleRun(item)}>
          <FontAwesome name="play" color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => handleEdit(item)}
        >
          <FontAwesome name="edit" color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => handleDelete(item.id)}
        >
          <FontAwesome name="trash" color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
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
    flexDirection: "row", // Use row for description + actions layout
    backgroundColor: "#2ecc71",
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  leftColumn: {
    flex: 1, // The left column takes more space for the description
    marginRight: 10,
  },
  rightColumn: {
    justifyContent: "center", // Center the buttons vertically
    alignItems: "center",
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
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#34495e",
    borderRadius: 6,
    marginBottom: 10,
    width: 20,
    height: 20,
  },
  editButton: {
    backgroundColor: "#e67e22",
  },
  deleteButton: {
    backgroundColor: "#e74c3c", // Red background for delete
  },
});
