import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
//
import FiledVertical from '../components/FieldVertical';
import RoundButton from '../components/RoundButton';
import Timer from '../components/Timer';
import RowContainer from '../components/RowContainer';
import Indicator from '../components/Indicator';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { parsePlan, formatSeconds, formatDuration } from '../Utils.js';


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
      };
  }
  componentWillMount() {
    let plan = this.props.navigation.getParam('plan');
    let parsedPlan = parsePlan(plan);
    this.start();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  start() {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now
    });

    // Start timer
    this.timer = setInterval(() => {
      this.setState(
        { now: new Date().getTime() }
      );
    }, 100);
  }

  pause() {
    clearInterval(this.timer);
    const { laps, now, start } = this.state;
    this.setState({
      start: 0,
      now: 0,
    });
  }

  resume() {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
    });
    this.timer = setInterval(() => {
      this.setState(
        { now: new Date().getTime() }
      );
    }, 100);
  }


  stop() {

  }

  edit() {

  }

  quit() {
    this.props.navigation.navigate('HIT');
  }

  renderTimerButton() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
        </Header>
        <Timer style={styles.timer} interval={2000} />
        <Indicator status='Workout' />
        <View style={styles.buttonContainer}>
          <RoundButton style={styles.timerButton} title="Start" color="#E33935" background="#3C1715"
            onPress={() => this.quit()} />
        </View>
        <Footer>
          <FiledVertical label="SETS LEFT" value="4" multiLine />
          <FiledVertical label="TIME PASSED" value={formatDuration(this.state.now - this.state.start)} multiLine />
          <FiledVertical label="CYCLES LEFT" value="3" multiLine />
        </Footer>
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
  },
  timer: {
    fontSize: 76,
    fontWeight: '200',
    width: 110
  },
})
