import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { globalStyles, COLORS } from "../globalStyles";

import { RowContainer, RoundButton, DigitalTimer } from "../components";

enum StatusEnum {
  STOPPED,
  RUNNING,
}

interface LapProps {
  number: number;
  interval: number;
  isFastest: boolean;
  isSlowest: boolean;
}

class Lap implements LapProps {
  number: number;
  interval: number;
  isFastest: boolean;
  isSlowest: boolean;
}

const LapItem: React.SFC<LapProps> = ({
  number,
  interval,
  isFastest,
  isSlowest
}) => {
  const lapDigitsStyle = [
    styles.lapDigits,
    isFastest && styles.fastest,
    isSlowest && styles.slowest
  ];

  return (
    <View style={styles.lap}>
      <Text style={styles.lapLabel}>Lap {number}</Text>
      <DigitalTimer style={lapDigitsStyle} timeElapsed={interval} />
    </View>
  );
};

interface LapsTableProps {
  laps: number[];
  timeElapsed: number;
}

const LapsTable: React.SFC<LapsTableProps> = ({ laps, timeElapsed }) => {
  const finishedLaps = laps.slice(1); // copy [1...]
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  // find out min and max lap interval
  if (finishedLaps.length >= 2) {
    finishedLaps.forEach(lap => {
      if (lap < min) min = lap;
      if (lap > max) max = lap;
    });
  }

  return (
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <LapItem
          key={index}
          number={laps.length - index}
          interval={index === 0 ? timeElapsed + lap : lap}
          isSlowest={lap === max}
          isFastest={lap === min}
        />
      ))}
    </ScrollView>
  );
};

export const StopwatchScreen: React.SFC = (): JSX.Element => {
  const [status, setStatus] = useState(StatusEnum.STOPPED);
  // current time
  const [now, setNow] = useState(0);
  // time ticks when click the start button
  const [start, setStart] = useState(0);
  // laps displayd in the table, newest one is the fist one in the array
  const [intervalsByLap, setIntervalsByLap] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (status === StatusEnum.RUNNING) {
        const now = new Date().getTime();
        setNow(now);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [now]);

  const createLap = () => {
    const now = new Date().getTime();
    const [firstLap, ...other] = intervalsByLap;
    setNow(now);
    setStart(now);
    setIntervalsByLap([0, firstLap + now - start, ...other]);
  };

  const startTimer = () => {
    setStatus(StatusEnum.RUNNING)
    const now = new Date().getTime();
    setNow(now);
    setStart(now);
    setIntervalsByLap([0]);
  };

  const stopTimer = () => {
    setStatus(StatusEnum.STOPPED)
    setStart(0)
  };

  const resumeTimer = ()=>{
    setStatus(StatusEnum.RUNNING)
  }
  
  const resetTimer = () => {
    setStatus(StatusEnum.STOPPED)
    setStart(0)
    setIntervalsByLap([]);
  };

  const timeElapsed = now - start;
  return (
    <View style={globalStyles.screenContainer}>
      <RowContainer height={200}>
        <DigitalTimer timeElapsed={timeElapsed} style={styles.bigTimer} />
      </RowContainer>

      {intervalsByLap.length === 0 &&
          <RowContainer height={80}>
            <RoundButton diameter={80} title="Lap" color="#8B8B90" backgroundColor="#151515"
              disabled />
            <RoundButton diameter={80}title="Start" color="#50D167" backgroundColor="#1B361F"
              onPress={startTimer} />
          </RowContainer>
        }
        {start > 0 &&
          <RowContainer>
            <RoundButton  diameter={80} title="Lap" color="#FFFFFF" backgroundColor="#3D3D3D"
              onPress={createLap} />
            <RoundButton  diameter={80} title="Stop" color="#E33935" backgroundColor="#3C1715"
              onPress={stopTimer} />
          </RowContainer>
        }
        {intervalsByLap.length > 0 && start === 0 &&
          <RowContainer>
            <RoundButton  diameter={80} title="Reset" color="#FFFFFF" backgroundColor="#3D3D3D"
              onPress={resetTimer} />
            <RoundButton  diameter={80} title="Resume" color="#50D167" backgroundColor="#1B361F"
              onPress={resumeTimer} />
          </RowContainer>
        }
      <LapsTable laps={intervalsByLap} timeElapsed={timeElapsed} />
    </View>
  );
};

const styles = StyleSheet.create({
  lap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: COLORS.FRONTGROUND_COLOR_GRAY,
    borderTopWidth: 1,
    paddingVertical: 10
  },
  lapLabel: {
    color: "#FFFFFF",
    fontSize: 18
  },

  lapDigits: {
    color: "#FFFFFF",
    fontSize: 18,
    width: 28
  },
  bigTimer: {
    color: "#FFFFFF",
    fontSize: 76,
    fontWeight: "200",
    width: 110
  },

  scrollView: {
    marginTop: 40,
    alignSelf: "stretch"
  },

  fastest: {
    color: "#4BC05F"
  },

  slowest: {
    color: "#CC3531"
  }
});
