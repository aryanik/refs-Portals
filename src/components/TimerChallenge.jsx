import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenges({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExperied] = useState(false);
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExperied(true);
    }, targetTime * 1000);
    dialog.current.showModal();
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
      <section className="challenge">
        <h2>{title}</h2>
        
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is Running" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
