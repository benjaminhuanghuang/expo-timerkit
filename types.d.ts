
interface ITimer {
  warmUp: number;
  name: string;
  type: TimerType;
  coolDown: nummber;
  comments: string;
  infinite: boolean;
}
interface TimerItems extends Array<ITimer>{}
/*
  MMA, Spar,
*/
interface RoundTimer extends ITimer{
  round: number;
  rountdDuration: number; // secondes
  resetDurationBetweenRound: number; // secondes
}
/*
High-intensity interval training (HIIT),
*/
interface HIITTimer extends ITimer{
  numberOfWorks: number;
  workInterval: number; // secondes
  resetInterval: number; // secondes
  resetIntervalBetweenSet: number;
  numberOfSets: number;
}
