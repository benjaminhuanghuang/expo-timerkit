import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

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
    // Reset the selections to 0
    setMinutes(0);
    setSeconds(0);
    Alert.alert("Countdown Cancelled", "The countdown has been reset.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Countdown</Text>

      {/* Minutes Picker */}
      <Text style={styles.label}>Minutes</Text>
      <Picker
        selectedValue={minutes}
        onValueChange={(itemValue) => setMinutes(itemValue)}
        style={styles.picker}
      >
        {/* Range of minutes (0 to 59) */}
        {[...Array(60).keys()].map((minute) => (
          <Picker.Item key={minute} label={`${minute}`} value={minute} />
        ))}
      </Picker>

      {/* Seconds Picker */}
      <Text style={styles.label}>Seconds</Text>
      <Picker
        selectedValue={seconds}
        onValueChange={(itemValue) => setSeconds(itemValue)}
        style={styles.picker}
      >
        {/* Range of seconds (0 to 59) */}
        {[...Array(60).keys()].map((second) => (
          <Picker.Item key={second} label={`${second}`} value={second} />
        ))}
      </Picker>

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
