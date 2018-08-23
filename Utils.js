import moment from 'moment';

const pad = (n) => n < 10 ? '0' + n : n;

export function formatSeconds(seconds)
{
    let duration = moment.duration(seconds, 'seconds');
    let formatted = pad(duration.minutes()) + ':' + pad(duration.seconds())
    return formatted;
}

