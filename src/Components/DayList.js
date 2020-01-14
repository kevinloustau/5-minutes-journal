import React from 'react';

export default function DayList(props) {
  
  const DayList = props.days.map( (day,i) => {
    return (<li key={i} src="dateURL?">{day.date}</li>)
  })
  return (
    <ul>
      {DayList}
    </ul>
    )
}
