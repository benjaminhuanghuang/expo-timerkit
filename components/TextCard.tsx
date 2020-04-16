import React, {useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { globalStyles } from "../globalStyles";
import {SplitLine} from './SplitLine'

export interface TextCardProps {
  title: string;
  content: string;
  needReadMore?: boolean
}

export const TextCard: React.FC<TextCardProps> = ({
  title,
  content,
  needReadMore,
}): JSX.Element => {
  const [expend, setExpend] = useState(false);

  const drawButton = ()=>{
      const buttonText = expend? "收起":"阅读更多"
      const iconName = expend? "md-arrow-dropup":"md-arrow-dropdown"
      return(
        <View style={styles.buttonSection}>
          <Ionicons size={25} name={iconName} />
          <Button title={buttonText} onPress={() => {setExpend(!expend)}}></Button>
      </View>
      )
  }

  let textSpendStyle = expend? null: {height: 250}
  textSpendStyle = needReadMore? textSpendStyle: null
  return (
    <View style={styles.textCardContainer}>
      <View style={styles.textCardTitle}>
        <Text style={globalStyles.h3}>{title}</Text>
      </View>
      <SplitLine/>
      <View style={styles.textCardContent}>
        <Text style={[globalStyles.text, textSpendStyle]} >{content}</Text>
      </View>
      {needReadMore ? drawButton() : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textCardContainer: {
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  textCardTitle: {
    display:"flex",
    marginTop:5,
    marginBottom:5,
    flexDirection: "row",
    justifyContent:"center"
  },
  textCardContent: {
    marginTop:15,
  },
  buttonSection:{
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
  }
});
