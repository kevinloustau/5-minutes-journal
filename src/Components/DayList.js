import React, { useContext } from 'react'
import './DayList.css'
import { JournalContext } from '../App'

export default function DayList(props) {
  const { handleDaySelect } = useContext(JournalContext)
  const DayList = props.days.map((day, i) => {
    return (
      <div className="day-list-el" key={i} onClick={() => handleDaySelect(day.id)}>
        <p className="day-list-el-date">{day.date}</p>
        <p className="day-list-el-quote">{day.quote}</p>
      </div>
    )
  })
  return <div id="day-list">{DayList}</div>
}
