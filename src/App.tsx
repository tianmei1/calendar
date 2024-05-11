import React from 'react';
import './App.css';
import Calendar from './calendar'; 

function App() {
  return (
    <div className="App">
      <div className='date-picker'>
        <Calendar specificDate={false} daysRange={5}/>
      </div>
    </div>
  );
}

export default App;
