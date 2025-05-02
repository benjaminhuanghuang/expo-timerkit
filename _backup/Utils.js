import moment from 'moment';

const pad = (n) => n < 10 ? '0' + n : n;

export function formatSeconds(seconds) {
    let duration = moment.duration(seconds, 'seconds');
    let formatted = pad(duration.minutes()) + ':' + pad(duration.seconds())
    return formatted;
}

export function formatDuration(interval) {
    let duration = moment.duration(interval);
    let formatted = pad(duration.minutes()) + ':' + pad(duration.seconds())
    return formatted;
}

export function parsePlan(plan) {
    if (plan.type === 'basic') {
        let { workout, recover, sets, cycles, cycleRecover } = plan.pattern;
        let cycleTime = workout * sets + recover * (sets - 1);
        let totalTime = cycleTime * cycles + cycleRecover * (cycles - 1);

        return {
            workout: formatSeconds(workout),
            recover: formatSeconds(recover),
            sets,
            cycles,
            cycleRecover: formatSeconds(cycleRecover),
            totalTime: formatSeconds(totalTime)
        }
    }
}