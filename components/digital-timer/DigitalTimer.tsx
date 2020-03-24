import React from 'react';
import { View, Text, } from 'react-native';
//
import moment from 'moment'
//
export interface DigitalTimerProps {
  elapsedTime: number;
  style:any
}

export const DigitalTimer :React.SFC<DigitalTimerProps> = ({elapsedTime, style}):  JSX.Element =>{
  const pad = (n) => n < 10 ? '0' + n : n;

  const duration = moment.duration(elapsedTime);
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
      <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={style}>{pad(duration.minutes())}:</Text>
          <Text style={style}>{pad(duration.seconds())}.</Text>
          <Text style={style}>{pad(centiseconds)}</Text>
      </View>
  );
}
