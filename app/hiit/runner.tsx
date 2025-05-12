import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Audio } from "expo-av";

export default function HIITRunnerScreen() {
  const { work, rest, rounds, name } = useLocalSearchParams();
  const totalRounds = parseInt(rounds as string, 10);
  const [currentRound, setCurrentRound] = useState(1);
  const [phase, setPhase] = useState<"work" | "rest">("work");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const soundRef = useRef<Audio.Sound | null>(null);
  const [roundsLeft, setRoundsLeft] = useState(totalRounds);

  const [flash, setFlash] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startPhase("work");

    return () => {
      clearInterval(timerRef.current!);
    };
  }, []);

  const startPhase = (nextPhase: "work" | "rest") => {
    setPhase(nextPhase);

    const duration =
      nextPhase === "work"
        ? parseInt(rounds as string, 10)
        : parseInt(rounds as string, 10);

    setSecondsLeft(duration);

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);

          if (nextPhase === "work") {
            startPhase("rest");
          } else {
            if (currentRound < totalRounds) {
              setCurrentRound((r) => r + 1);
              setRoundsLeft((r) => r - 1);
              startPhase("work");
            } else {
              // Done, you can stop the timer
              return 0;
            }
          }
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.planName}>{name}</Text>
      <Text style={styles.title}>{name} Timer</Text>
      <Text style={styles.details}>
        Work: {work}s | Rest: {rest}s | Rounds: {rounds}
      </Text>
      {/* Timer UI can be added here */}
      <Text style={styles.roundText}>
        Round {currentRound} of {totalRounds}
      </Text>
      <Text style={styles.phaseText}>{phase.toUpperCase()}</Text>
      <Text style={styles.timer}>{secondsLeft}s</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  planName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  roundText: {
    fontSize: 18,
    marginBottom: 8,
  },
  phaseText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#2980b9",
    marginBottom: 12,
  },
  timer: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#e74c3c",
  },
});
