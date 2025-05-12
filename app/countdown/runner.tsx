import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CountDownRunner() {
  const { duration } = useLocalSearchParams();

  useEffect(() => {}, [duration]);

  return (
    <View style={styles.container}>
      <Text style={styles.details}>Work: {duration}s</Text>
      {/* Timer UI can be added here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  details: {
    fontSize: 18,
    marginVertical: 10,
  },
});
