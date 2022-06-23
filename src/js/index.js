//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter.jsx";

let isPaused = false
let status = 'counting'
let time = 0;
let totalSecs = 0;
let totalMinutes = 0;
let totalHours = 0;

const stopInterval = () => {

  if (isPaused && status === 'countdown' && time === 0) {
    status = 'counting'
    isPaused = false
  } else {
    isPaused = !isPaused;
  }
}

const resetInterval = () => {
  time = 0;
}


const handleCountdownInputs = (data) => {

  if (data.target.name === 'hours') {
    totalHours = data.target.value * 3600
  }

  if (data.target.name === 'minutes') {
    totalMinutes = data.target.value * 60
  }

  if (data.target.name === 'seconds') {
    totalSecs = Math.floor(data.target.value)
  }


}

const handleCountdown = () => {
  stopInterval();
  status = 'countdown'
  isPaused = false
  time = totalSecs + totalMinutes + totalHours
}

const interval = () => {
  setInterval(() => {
    ReactDOM.render(<SecondsCounter
      stopInterval={stopInterval}
      resetInterval={resetInterval}
      time={time}
      isPaused={isPaused}
      handleCountdownInputs={handleCountdownInputs}
      handleCountdown={handleCountdown}
      status={status}
    />
      , document.querySelector("#app"));

    if (status === 'counting') {
      if (!isPaused) {
        time++
      }
    }

    if (status === 'countdown') {
      if (time > 0 && !isPaused) {
        time--
      }

      if (time === 0 && status === 'countdown') {
        isPaused = true
      }
    }
  }, 1000)
}

interval()

