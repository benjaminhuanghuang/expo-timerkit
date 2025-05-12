import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
export default function HIITRunnerScreen() {
  const { work, rest, rounds, name } = useLocalSearchParams();

  useEffect(() => {
    // Initialize timer logic here based on work, rest, rounds
    console.log("Starting HIIT Timer with settings:", { work, rest, rounds });
  }, [work, rest, rounds]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name} Timer</Text>
      <Text style={styles.details}>
        Work: {work}s | Rest: {rest}s | Rounds: {rounds}
      </Text>
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
