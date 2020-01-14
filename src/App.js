import React, { useState } from 'react';
import './App.css';
import uuidv4 from 'uuid/v4'
import Day from './Components/Day';
import DayList from './Components/DayList';

export const DayContext = React.createContext();

export default function App() {

  const [days, setDays] = useState(emptyDays)
  const [day, setDay] = useState(emptyDay)

  function handleDayAdd() {
    const newDay = {
      id: uuidv4(),
      date: createDate(),
      gratefull: [''],
      great: [''],
      affirmation: '',
      happened: [''],
      how: '',
    }
    setDays([...days,newDay])
  }

  function handleDayDelete() {
    //to do
  }

  function createDate(){
    let today = new Date();
    let date = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
    return date;
  }

  return (
    <div className="App">
      <DayList days={days} handleDayAdd={handleDayAdd} handleDayDelete={handleDayDelete} />
      <Day content={day} />
    </div>
  );
}

const emptyDays = [
  {
    id: uuidv4(),
    date: '',
    gratefull:  ['','',''],
    great: ['','',''],
    affirmation: '',
    happened:  ['','',''],
    how: '',
  },
  {
    id: uuidv4(),
    date: '',
    gratefull:  ['','',''],
    great: ['','',''],
    affirmation: '',
    happened:  ['','',''],
    how: '',
  }
]

const emptyDay =
  {
    id: uuidv4(),
    date: '',
    gratefull:  ['','',''],
    great: ['','',''],
    affirmation: '',
    happened:  ['','',''],
    how: '',
  };

