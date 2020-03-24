import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { globalStyles, COLORS } from "../globalStyles";

import { RowContainer, RoundButton, DigitalTimer } from "../components";

enum StatusEnum {
  STOPPED,
  RUNNING
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
  const lapTextStyle = [
    styles.lapText,
    isFastest && styles.fastest,
    isSlowest && styles.slowest
  ];

  return (
    <View style={styles.lap}>
      <Text style={lapTextStyle}>Lap {number}</Text>
      <DigitalTimer
        style={lapTextStyle}
        timeElapsed={interval}
      />
    </View>
  );
};

interface LapsTableProps {
  laps: number[];
  timer: any;
}

const LapsTable: React.SFC<LapsTableProps> = ({ laps, timer }) => {
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
          interval={index === 0 ? timer + lap : lap}
          isSlowest={lap === max}
          isFastest={lap === min}
        />
      ))}
    </ScrollView>
  );
};

export const StopwatchScreen: React.SFC = (): JSX.Element => {
  const [now, setNow] = useState(0);
  const [start, setStart] = useState(new Date().getTime());
  // The elapsed time since start
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerFunction, setTimerFunction] = useState(0);

  const [status, setStatus] = useState(StatusEnum.STOPPED);
  const intervalsByLap: number[] = [1000,2000,3000];

  useEffect(() => {
    return () => clearInterval(timerFunction);
  }, []);

  const lapButtonTitle = status === StatusEnum.RUNNING ? "Lap" : "Reset";
  const runButtonTitle = status === StatusEnum.RUNNING ? "Stop" : "Start";
  const runButtonColor = status === StatusEnum.RUNNING ? "#FFFFFF" : "#50D167";
  const runButtonBGColor =
    status === StatusEnum.RUNNING ? COLORS.BUTTON_BACKGROUND_RED : "#1B361F";

  const onLapButtonClick = () => {
    if (status === StatusEnum.RUNNING) {
      createLap();
    }
  };

  const onRunButtonClick = () => {
    if (status === StatusEnum.STOPPED) {
      setStatus(StatusEnum.RUNNING);
    } else {
      setStatus(StatusEnum.STOPPED);
    }
  };

  const createLap = () => {};

  // const reset= ()=> {
  //   elapsedTimeWhenLap= [],
  //   start: 0,
  //   now: 0,
  // }

  return (
    <View style={globalStyles.screenContainer}>
      <RowContainer height={240}>
        <DigitalTimer timeElapsed={12345} style={styles.timer} />
      </RowContainer>

      <RowContainer height={80}>
        <RoundButton
          color={COLORS.FRONTGROUND_COLOR}
          backgroundColor={COLORS.FRONTGROUND_COLOR_GRAY}
          diameter={80}
          onPress={onLapButtonClick}
          title={lapButtonTitle}
        />
        <RoundButton
          color={runButtonColor}
          backgroundColor={runButtonBGColor}
          diameter={80}
          onPress={onRunButtonClick}
          title={runButtonTitle}
        />
      </RowContainer>
      <LapsTable laps={intervalsByLap} timer={12345} />
    </View>
  );
};

const styles = StyleSheet.create({
  lap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#151515",
    borderTopWidth: 1,
    paddingVertical: 10
  },
  lapText: {
    color: "#FFFFFF",
    fontSize: 18
  },

  timer: {
    color: "#FFFFFF",
    fontSize: 76,
    fontWeight: "200"
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
