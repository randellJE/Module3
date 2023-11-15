// Section 8: The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.


class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }
    const myClock = new DigitalClock('my clock:')
    // myClock.start()


// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
//     parameter precision – the number of ms between 'ticks'. This precision parameter
//     should default to 1 second if not supplied.

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the
//     parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
//     should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
//     default to 07:00 if not supplied.


//A

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }
  
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
    }
  }
  
  const myPrecisionClock = new PrecisionClock('precision clock:', 500);
//   myPrecisionClock.start();


  //B

  class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
      super(prefix);
      this.wakeupTime = wakeupTime;
      this.hasWakeupBeenCalled = false;
    }
  
    display() {
      super.display();
  
      let currentTime = new Date();
      let currentHours = currentTime.getHours();
      let currentMinutes = currentTime.getMinutes();
      let currentTimeString = `${currentHours}:${currentMinutes < 10 ? '0' : ''}${currentMinutes}`;
  
      if (currentTimeString === this.wakeupTime && !this.hasWakeupBeenCalled) {
        console.log("Wake Up!");
        this.stop();
        this.hasWakeupBeenCalled = true;
      }
    }
  }
  
  const myAlarmClock = new AlarmClock('alarm clock:', '18:18');
//   myAlarmClock.start();