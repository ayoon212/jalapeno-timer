import { useState, useEffect } from 'preact/hooks';

export default function Timer({ isRunning }) {
  const [time, setTime] = useState(25*60);
  const [timerFn, setTimerFn] = useState(null);

  useEffect(function countdown() {
    if (!isRunning) {
      clearTimeout(timerFn);
      return;
    }

    if (timerFn) {
      return;
    }

    const fn = setTimeout(function() {
      setTime(time - 1);
    }, 1000);
    setTimerFn(fn);
  }, [isRunning]);

  return (
    <>
      {time}
    </>
  );
}
