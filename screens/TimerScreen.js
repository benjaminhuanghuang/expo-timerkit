import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
//
import RoundButton from '../components/RoundButton';

export default class TimerScreen extends React.Component {
  // Settings for the tab navigation
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name={`ios-timer${focused ? '' : '-outline'}`} size={25} color={tintColor} />
    ),
  }

  constructor(props) {
    super(props);

    this.state =
      {
        timer: 1234567,
        start: 0,
        now: 0,
        plan: {
          name: 'Default Plan',
          type: 'basic',
          pattern: {
            workout: 60,
            recover: 20,
            sets: 4,
            cycles: 4,
            cycleRecover: 40
          }
        }
      };
  }

  start() {

  }

  pause() {

  }

  stop() {

  }

  edit() {

  }

  renderTimerButton() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>HIT Workkout</Text>
        <View style={styles.buttonContainer}>
          <RoundButton style={styles.timerButton} title="Start" color="#E33935" background="#3C1715"
            onPress={() => this.start()} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',   //in row
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  screenTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '300',
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 200,
  }
})
