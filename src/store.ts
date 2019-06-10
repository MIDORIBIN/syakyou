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
    setCount(this.state.count);
  },
  initCount() {
    this.state.count = loadSleepTime();
  },
};

function loadSleepTime() {
  if (!localStorage.count) {
    localStorage.count = 0;
  }
  return localStorage.count;
}

function setCount(count: number) {
  localStorage.count = count;
}
