import React, { useState, useEffect} from 'react';
import './App.css';
import uuidv4 from 'uuid/v4'
import DayList from './Components/DayList';
import Day from './Components/Day';

export const JournalContext = React.createContext();
const LOCAL_STORAGE_KEY = '5minJournal.days'

export default function App() {
  const [days, setDays] = useState(emptyDays);
  const [selectedDayId, setSelectedDayId] = useState();
  const selectedDay = days.find(d => d.id === selectedDayId);

  useEffect(() => {
    const journalJson = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (journalJson != null) {setDays(JSON.parse(journalJson))}
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(days));
  },[days])
  
  const JournalContextValue = {
    handleDayAdd,
    handleDayDelete,
    handleDaySelect,
    handleDayChange
  }

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

  function handleDayDelete() {}

  function handleDaySelect(id) {
    setSelectedDayId(id);
  }

  function handleDayChange() {} 

  function createDate(){
    let today = new Date();
    let date = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
    return date;
  }

  return (
    <JournalContext.Provider value={JournalContextValue}>
      <div className="App">
        <h1>Five minutes journal</h1>
          <DayList days={days} />
          {selectedDayId && <Day content={selectedDay}/>}
      </div>
    </JournalContext.Provider>
  );
}

const emptyDays = [
  {
    id: 1,
    date: '2020.02.10',
    gratefull:  ['my friend','sun','be healthy'],
    great: ['super','cool','holy'],
    affirmation: 'my affirmation',
    happened:  ['that',' this',' and this'],
    how: 'meditate tonight',
  },
  {
    id: 2,
    date: '2020.02.11',
    gratefull:  ['sun','moon','thy'],
    great: ['I love that','bell','car'],
    affirmation: 'my affirmation is affirmed',
    happened:  ['da',' da',' and da'],
    how: 'meditate tonight',
  },
]
