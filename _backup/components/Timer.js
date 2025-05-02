import React from 'react';
import { Text, View } from 'react-native';

import moment from 'moment';

function Timer({ interval, style }) {
    const pad = (n) => n < 10 ? '0' + n : n;

    const duration = moment.duration(interval);
    return (
        <View style={{flexDirection:'row'}}>
            
            <Text style={style}>{pad(duration.minutes())}:</Text>
            <Text style={style}>{pad(duration.seconds())}</Text>
        </View>
    );
}

export default Timer;