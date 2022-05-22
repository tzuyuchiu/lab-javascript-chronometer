class Chronometer {
  constructor(currentTime, intervalId) {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof callback === 'function') {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    value.padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    if (this.intervalId) {
      return (this.currentTime = 0);
    }
  }

  split() {
    minuteTwoDigit = computeTwoDigitNumber(getMinutes());
    secondTwoDigit = computeTwoDigitNumber(this.getSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
