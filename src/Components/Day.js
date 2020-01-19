import React, { useState } from 'react'
import './Day.css'
import DynamicInputComponent from './DynamicInputComponent'

export default function Day(props) {
  const [content, setContent] = useState(props.content)

  return (
    <div className="journal">
      <div className="journalContent">
        <div id="date">{content.date}</div>
        {/* <button onClick={journalContext.handleDayDelete}>delete</button> */}
        <div id="day-inputs">
          <DynamicInputComponent title="I am grateful for..." numberOfEl={3} displayNumber={true} content={content.gratefull} name="gratefull" />
          <DynamicInputComponent title="What would make today great?" numberOfEl={3} displayNumber={true} content={content.great} name="great" />
          <DynamicInputComponent title="Daily affirmations, I am..." numberOfEl={1} displayNumber={false} content={content.affirmation} name="affirmation" />
        </div>
        <div id="night-inputs">
          <DynamicInputComponent title="3 amazing things that happened today..." numberOfEl={3} displayNumber={true} content={content.happened} name="happened" />
          <DynamicInputComponent title="How could I have made today even better?" numberOfEl={1} displayNumber={false} content={content.how} name="how" />
        </div>
      </div>
    </div>
  )
}
