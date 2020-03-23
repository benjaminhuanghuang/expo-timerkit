import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
//
import RowContainer from '../components/RowContainer';
import FiledVertical from '../components/FieldVertical';
import RoundButton from '../components/RoundButton';

import { parsePlan } from '../Utils.js';

export class RunnerScreen extends React.Component {
  // Settings for the tab navigation
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name={`ios-body${focused ? '' : '-outline'}`} size={25} color={tintColor} />
    ),
  }

  constructor(props) {
    super(props);

    this.state = {
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
    this.props.navigation.navigate('Timer', { plan: this.state.plan });
  }

  render() {
    let { workout, recover, sets, cycles, cycleRecover, totalTime } = parsePlan(this.state.plan);

    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>HIT Workout</Text>
        <RowContainer>
          <FiledVertical label="WORK OUT" value={workout} />
          <FiledVertical label="RECOVER" value={recover} />
          <FiledVertical label="SETS" value={sets} />
        </RowContainer>
        <RowContainer>
          <FiledVertical label="CYCLES COUNT" value={cycles} multiLine />
          <FiledVertical label="TOTAL TIME" value={totalTime} multiLine />
          <FiledVertical label="CYCLE RECOVER" value={cycleRecover} multiLine />
        </RowContainer>

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
