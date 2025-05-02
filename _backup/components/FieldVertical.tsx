import React from "react";
import { StyleSheet, Text, View } from "react-native";


interface FieldVerticalProps{
  label:string;
  value:string|Number;
  multiLine: Boolean;
  color: string
}
export const FieldVertical:React.FC<FieldVerticalProps> = ({ label, value, multiLine, color })=> {

  const renderLabel = (label, multiLine, color)=> {
    if (multiLine) {
      let labLines = label.split(" ");
      return labLines.map((line, i) => (
        <Text key={i} style={[styles.label, { color }]}>
          {line}
        </Text>
      ));
    } else {
      return <Text style={[styles.label, { color }]}>{label}</Text>;
    }
  }
  return (
    <View style={styles.fieldVerticalContainer}>
      {renderLabel(label, multiLine, color)}
      <Text style={[styles.value, { color }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldVerticalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  label: {
    fontSize: 14,
    fontWeight: "500"
  },

  value: {
    fontSize: 18,
    fontWeight: "800"
  }
});
