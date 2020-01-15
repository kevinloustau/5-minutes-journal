import React, {useContext} from 'react';
import { JournalContext } from '../App';

export default function DayList(props) {
  const {handleDaySelect} = useContext(JournalContext);
  const DayList = props.days.map( (day,i) => {
    return (<li key={i} onClick={() => handleDaySelect(day.id)}>{day.date}</li>)
  })
  return (
    <ul>
      {DayList}
    </ul>
    )
}
