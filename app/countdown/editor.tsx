import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";

export default function CustomCountdownScreen() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Handle Start button press
  const handleStart = () => {
    // Here you would handle the logic to start the countdown
    // For now, we'll show an alert with the selected time
    Alert.alert(
      "Countdown Started",
      `You have selected: ${minutes} minutes and ${seconds} seconds`
    );
  };

  // Handle Cancel button press
  const handleCancel = () => {
    router.push("/countdown/list");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Countdown</Text>
      {/* Container for both pickers */}
      <View style={styles.pickersContainer}>
        {/* Left Column for Minutes Picker */}
        <View style={styles.column}>
          <Text style={styles.label}>Minutes</Text>
          <Picker
            selectedValue={minutes}
            onValueChange={(itemValue) => setMinutes(itemValue)}
            style={styles.picker}
          >
            {[...Array(60).keys()].map((minute) => (
              <Picker.Item key={minute} label={`${minute}`} value={minute} />
            ))}
          </Picker>
        </View>

        {/* Right Column for Seconds Picker */}
        <View style={styles.column}>
          <Text style={styles.label}>Seconds</Text>
          <Picker
            selectedValue={seconds}
            onValueChange={(itemValue) => setSeconds(itemValue)}
            style={styles.picker}
          >
            {[...Array(60).keys()].map((second) => (
              <Picker.Item key={second} label={`${second}`} value={second} />
            ))}
          </Picker>
        </View>
      </View>

      {/* Action buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  pickersContainer: {
    flexDirection: "row", // Horizontal alignment of the columns
    justifyContent: "space-between",
    width: "100%", // Make sure it uses the full width
    marginBottom: 20,
  },
  column: {
    width: "45%", // Ensure each column takes up 45% of the width
    alignItems: "center", // Center the content within each column
  },
  picker: {
    width: 150,
    height: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 30,
  },
  cancelButton: {
    backgroundColor: "#e74c3c", // Red for cancel
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  startButton: {
    backgroundColor: "#2ecc71", // Green for start
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
