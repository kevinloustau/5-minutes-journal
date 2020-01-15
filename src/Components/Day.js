import React from 'react';
import './Day.css';

import DynamicInputComponent from './DynamicInputComponent';

export default function Day(props) {
  const { date, gratefull, great, affirmation, happened, how } = props.content;

  return (
    <div className="journalContainer">
      <div className="journalContent">
      {date}
        <div id="DayInputs">
          <DynamicInputComponent title="I am grateful for..." numberOfEl={3} displayNumber={true} content={gratefull} name='gratefull' />
          <DynamicInputComponent title="What would make today great?" numberOfEl={3} displayNumber={true} content={great} name='great'/>
          <DynamicInputComponent title="Daily affirmations, I am..." numberOfEl={1} displayNumber={false} content={affirmation} name='affirmation'/>
        </div>
        <div id="NightInputs">
          <DynamicInputComponent title="3 amazing things that happened today..." numberOfEl={3} displayNumber={true} content={happened} name='happened'/>
          <DynamicInputComponent title="How could I have made today even better?" numberOfEl={1} displayNumber={false} content={how} name='how'/>
        </div>
      </div>
    </div>
  );
}
