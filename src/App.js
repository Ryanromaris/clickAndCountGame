import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Timer from './Timer';
import CountMax from './countMax';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Timer />} />
        <Route path='/countMax' element={<CountMax />} />
      </Routes>
    </div>
  );
}

export default App;
