import styles from './style.module.css';
import { useState, useEffect } from 'preact/hooks';
// import Timer from './components/Timer';

export default function Home() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <section class={styles.home}>
        <h1>Jalapeño Timer</h1>
        <h2>The spicy pomodoro timer.</h2>

        {/*<Timer />*/}
        <button onClick={setIsRunning(!isRunning)}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </section>
    </>
  );
}

// TODO: Don't know how to import this yet
// function Timer({ isRunning }) {
//   const [time, setTime] = useState(25*60);
//   const [timerFn, setTimerFn] = useState(null);

//   useEffect(function countdown() {
//     if (!isRunning) {
//       clearInterval(timerFn);
//       return;
//     }

//     if (timerFn) {
//       return;
//     }

//     const fn = setInterval(function() {
//       setTime(time - 1);
//     }, 1000);
//     setTimerFn(fn);
//   }, [isRunning]);

//   return (
//     <div>
//       {time}
//     </div>
//   );
// }
