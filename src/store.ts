export const store = {
  state: {
    sleepTime: 0.1,
    count: 0,
  },
  setSleepTime(time: number) {
    this.state.sleepTime = time;
  },
  increaseCount() {
    this.state.count++;
  },
};
