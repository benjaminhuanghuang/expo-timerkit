## Datatime operation in JS

- getTime()

```js
const now = new Date().getTime();
```

getTime() method returns the numeric value corresponding to the time for the specified date according to universal time.

The value returned by the getTime() is the number of milliseconds since 1 January 1970 00:00:00.

- milliseconds to HH:MM:SS
  Use moment library

```
  const duration = moment.duration(timeValue);
  const mins = duration.minutes();
  const seconds = duration.seconds();
  const centiseconds = Math.floor(duration.milliseconds() / 10);
```
