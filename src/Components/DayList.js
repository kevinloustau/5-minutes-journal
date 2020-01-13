import React from 'react';

export default function DayList(props) {
  const DayList = props.days.map( day => {
    return (<li src="dateURL?">{day.date}</li>)
  })

  return (
    <ul>
      {DayList}
    </ul>
    )
}
