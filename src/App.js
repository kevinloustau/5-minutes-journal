import React from 'react';
import './App.css';

import Date from './Components/Date';
import DynamicInputComponent from './Components/DynamicInputComponent';

function App() {
  return (
    <div className="App">
      <div className="journalContent">
        <Date />
        <div id="DayInputs">
          <DynamicInputComponent title="I am grateful for..." numberOfEl={3} displayNumber={true} />
          <DynamicInputComponent title="What would make today great?" numberOfEl={3} displayNumber={true} />
          <DynamicInputComponent title="Daily affirmations, I am..." numberOfEl={1} displayNumber={false} />
        </div>
        <div id="NightInputs">
          <DynamicInputComponent title="3 amazing things that happened today..." numberOfEl={3} displayNumber={true} />
          <DynamicInputComponent title="How could I have made today even better?" numberOfEl={1} displayNumber={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
