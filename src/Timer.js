import React, { useState, useEffect, useRef } from 'react';
import './timer.css';

const Timer = () => {
  const [counting, setCounting] = useState(0);
  const refCount = useRef(0);
  const [view, setView] = useState('landing');
  const [expect, setExpect] = useState(0);
  const [msg, setMsg] = useState('');
  const plus = () => {
    refCount.current = refCount.current + 1;
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
    let expectVal = document.querySelector('.expect').value;
    if (expectVal == refCount.current) {
      setMsg('와! 일치해요! 기록으로 인정됩니다.');
      localStorage.setItem(
        'best',
        Math.max(refCount.current, localStorage.getItem('best'))
      );
      setView('end');
      setExpect(expectVal);
    } else {
      setMsg('틀렸어요ㅠㅠ 기록으로 인정되진 않아요');
      setView('end');
      setExpect(expectVal);
    }
    setView('end');
  };

  useEffect(() => {
    if (time === 0) {
      setTime(10);
      setView('expect');
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
            <div className='timer'>{time}초</div>

            <button className='plusBtn' onClick={plus}>
              +
            </button>
          </>
        ) : view === 'expect' ? (
          <>
            몇 번 누르셨다고 생각하시나요??
            <input type='number' className='expect'></input>
            <button type='submit' onClick={goToResult}>
              제출!
            </button>
          </>
        ) : view === 'end' ? (
          <>
            <div>실제 클릭 횟수:{refCount.current}</div>
            <div>예상 클릭 횟수:{expect}</div>
            <div>{msg}</div>
            <button
              onClick={() => {
                setView('landing');
                refCount.current = 0;
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

export default Timer;
