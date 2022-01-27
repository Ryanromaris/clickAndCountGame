import React, { useState, useEffect, useRef } from 'react';
import './timer.css';

const CountMax = () => {
  const [counting, setCounting] = useState(0);
  const [view, setView] = useState('landing');
  const [msg, setMsg] = useState('');
  const plus = () => {
    setCounting((counting) => counting + 1);
  };
  const [time, setTime] = useState(10);

  const start = () => {
    setView('timer');
    setTime(10);
    let stopWatch = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setTimeout(() => clearInterval(stopWatch), 11000);
  };

  const goToResult = () => {
    localStorage.setItem(
      'best',
      Math.max(counting, localStorage.getItem('best'))
    );
  };

  useEffect(() => {
    if (time === 0) {
      setTime(10);
      setView('end');
      goToResult();
    }
  });

  return (
    <div>
      <div className='main_container'>
        {view === 'landing' ? (
          <>
            <h2>Click as much as you can!</h2>
            <button className='plusBtn' onClick={start}>
              Start
            </button>
            <h2>최고 기록:{localStorage.getItem('best')}</h2>
          </>
        ) : view === 'timer' ? (
          <>
            <div className='timer'>남은 시간: {time}초</div>
            <div>{counting}</div>
            <button className='plusBtn' onClick={plus}>
              +
            </button>
          </>
        ) : view === 'end' ? (
          <>
            <div>클릭 횟수:{counting}</div>
            <div>최고 기록: {localStorage.getItem('best')}</div>
            <div>{msg}</div>
            <button
              onClick={() => {
                setView('landing');
                setCounting(0);
              }}
            >
              다시하기
            </button>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CountMax;
