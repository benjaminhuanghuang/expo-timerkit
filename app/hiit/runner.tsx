import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";

type RunnerScreenProps = {
  route: RouteProp<{
    params: { work: number; rest: number; rounds: number; name: string };
  }>;
};

export default function HIITRunnerScreen({ route }: RunnerScreenProps) {
  const { work, rest, rounds, name } = route.params;

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
