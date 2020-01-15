import React, { useState } from 'react';
import './Day.css';
import DynamicInputComponent from './DynamicInputComponent';
import { JournalContext } from '../App';

export default function Day(props) {
  const [content, setContent] = useState(props.content);

  const journalContext = React.useContext(JournalContext);

  return (
    <div className="journalContainer">
      <div className="journalContent">
      <button onClick={journalContext.handleDayUnselect}>back to list</button>
      {content.date}
      <button onClick={journalContext.handleDayDelete}>delete</button>
        <div id="DayInputs">
          <DynamicInputComponent title="I am grateful for..." numberOfEl={3} displayNumber={true} content={content.gratefull} name='gratefull' />
          <DynamicInputComponent title="What would make today great?" numberOfEl={3} displayNumber={true} content={content.great} name='great'/>
          <DynamicInputComponent title="Daily affirmations, I am..." numberOfEl={1} displayNumber={false} content={content.affirmation} name='affirmation'/>
        </div>
        <div id="NightInputs">
          <DynamicInputComponent title="3 amazing things that happened today..." numberOfEl={3} displayNumber={true} content={content.happened} name='happened'/>
          <DynamicInputComponent title="How could I have made today even better?" numberOfEl={1} displayNumber={false} content={content.how} name='how'/>
        </div>

      </div>
    </div>
  );
}
