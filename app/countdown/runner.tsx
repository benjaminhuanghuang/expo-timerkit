import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Audio } from "expo-av";

export default function CountDownRunner() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);
  const [flash, setFlash] = useState(false);

  const { duration } = useLocalSearchParams();

  useEffect(() => {
    setSecondsLeft(parseInt(duration as string, 10));

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;
        if (next <= 3 && next > 0) {
          playBeep(); // Play sound in the last seconds
          triggerFlash();
        }

        // tear down when the countdown is finished
        if (next <= 0) {
          clearInterval(timerRef.current!);
          unloadSound();
          router.back();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => {
      clearInterval(timerRef.current!);
      unloadSound();
    };
  }, [duration]);

  const playBeep = async () => {
    if (!soundRef.current) {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/beep.mp3")
      );
      soundRef.current = sound;
    }
    await soundRef.current.replayAsync();
  };
  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200); // Flash for 200ms
  };
  const unloadSound = async () => {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
  };
  const handleCancel = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    router.back(); // Go back to the previous screen
  };

  return (
    <View
      style={[
        styles.container,
        flash ? styles.flashBackground : styles.normalBackground,
      ]}
    >
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
  normalBackground: {
    backgroundColor: "#ffffff",
  },
  flashBackground: {
    backgroundColor: "#ffdddd",
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
