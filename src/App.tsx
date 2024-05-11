import React from 'react';
import './App.css';
import Calendar from './calendar'; 

function App() {
  return (
    <div className="App">
      <div className='date-picker'>
        <Calendar specificDate={7} />
      </div>
    </div>
  );
}

export default App;
