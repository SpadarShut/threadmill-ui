const defaultState = {
  duration: 0,
  duration_countdown: 0,
  calories: 0,
  speed: 0,
  grade: 0,
  heart_rate: 0,
  pace: 0,
  distance: 0,
}

export default class Workout {
  constructor({ maxDurationSeconds, onTick = Function.prototype, onStop = Function.prototype }) {
    this.maxDurationSeconds = maxDurationSeconds;
    this.onTick = onTick;
    this.onStop = onStop;
    this.timerIntervalId = null;
    this.state = Object.assign({}, defaultState);

    this.tickInterval = 500;
  }

  tick = () => {
    const { state, tickInterval, maxDurationSeconds } = this;
    const burnRate = 0.1875;
    const speed = 9;
    const duration = state.duration + tickInterval;
    const duration_countdown = maxDurationSeconds * 1000 - duration;
    const calories = duration * burnRate / 1000;
    const distance = duration / 1000 / 60 / 60 * speed;
    const pace = duration / 1000 / 60 / distance;

    this.state = {
      duration,
      duration_countdown,
      calories,
      pace,
      distance,
      speed,
      grade: 0,
      heart_rate: 127,
    }
    this.onTick(this.state);

    if (duration_countdown <= 0){
      this.stop()
    }
  }

  start = () => {
    this.resetState();
    this.onTick(this.state);
    this.timerIntervalId = setInterval(this.tick, this.tickInterval);
  }

  resetState = () => {
    this.state = {
      ...defaultState,
      duration_countdown: this.maxDurationSeconds * 1000
    }
  }

  stop = () => {
    clearInterval(this.timerIntervalId)
    this.onStop(this.state)
  }
}