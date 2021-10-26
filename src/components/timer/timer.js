import { useStopwatch } from 'react-timer-hook';
import "./timer.scss";
export default function MyTimer() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
  } = useStopwatch({autoStart: false});


  return (
    <div className="timer" style={{textAlign: 'center'}}>
      <div>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button className="timer-btn" onClick={()=> {isRunning ? pause() : start()}}>{isRunning ?"Stop": "Start"}</button>
    </div>
  );
}