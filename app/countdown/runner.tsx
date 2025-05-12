import React, { useState, useEffect, useRef } from "react";
import { Button, View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function CountDownRunner() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { duration } = useLocalSearchParams();

  useEffect(() => {
    setSecondsLeft(parseInt(duration as string, 10));

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [duration]);

  const handleCancel = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    router.back(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{secondsLeft}s</Text>
      <Pressable
        style={({ pressed }) => [
          styles.cancelButton,
          pressed && styles.cancelPressed,
        ]}
        onPress={handleCancel}
      >
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  timerText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#2ecc71",
  },
  cancelButton: {
    marginTop: 40,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#e74c3c",
    borderRadius: 8,
  },
  cancelPressed: {
    backgroundColor: "#c0392b",
  },
  cancelText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
