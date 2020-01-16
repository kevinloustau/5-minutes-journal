import React, {useContext} from 'react';
import "./DayList.css" ;
import { JournalContext } from '../App';

export default function DayList(props) {
  const {handleDaySelect} = useContext(JournalContext);
  const DayList = props.days.map( (day,i) => {
    return (<li className="day-list" key={i} onClick={() => handleDaySelect(day.id)}>{day.date}</li>)
  })
  return (
    <div id="day-list">
      <ul className="day-list">
        {DayList}
      </ul>
    </div>
    )
}
