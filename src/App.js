import React, { useState, useEffect} from 'react';
import './App.css';
import uuidv4 from 'uuid/v4';
import DayList from './Components/DayList';
import Day from './Components/Day';

export const JournalContext = React.createContext();

export default function App() {
  const [days, setDays] = useState(emptyDays);
  const [todayDate, setTodayDate] = useState()
  const [selectedDayId, setSelectedDayId] = useState();
  const selectedDay = days.find(day => day.id === selectedDayId);
  const todayDay = days.find(d => d.date === todayDate);

  useEffect(() => {

    createTodayDate();
    if (todayDay == null) {
      handleDayAdd();
    }
    //get json from api
  }, [todayDate,todayDay,days,handleDayAdd])
  
  const JournalContextValue = {
    handleDayAdd,
    handleDayDelete,
    handleDaySelect,
    handleDayUnselect,
    handleDayChange
  }

  function handleDayAdd() {
    const id = uuidv4();
    const newDay = {
      id: id,
      date: todayDate,
      gratefull: [''],
      great: [''],
      affirmation: '',
      happened: [''],
      how: '',
    }
    setDays([...days,newDay])
    setSelectedDayId(newDay.id);
  }

  function handleDayDelete() { console.log(`TO DO delete func, id${selectedDayId}`)};

  function handleDaySelect(id) {
    setSelectedDayId(id);
  }

  function handleDayUnselect(id) {
    setSelectedDayId(null);
  }

  function handleDayChange(propertyName,propertyValue) {
    let newDays = days;
    let updateDay = newDays.find(d => d.id === selectedDayId)
    updateDay[propertyName] = propertyValue;
    setDays(newDays);
  } 

  function createTodayDate(){
    let today = new Date();
    let date = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();
    setTodayDate(date);
  }


  return (
    <JournalContext.Provider value={JournalContextValue}>
      <div className="App">
        <h1 id='mainTitle'>Five minutes journal</h1>
          {!selectedDayId && <DayList days={days} />}
          {selectedDayId && <Day content={selectedDay} />}
      </div>
    </JournalContext.Provider>
  );
}

const emptyDays = [
  {
    id: 1234,
    date: '2020.02.10',
    gratefull:  ['1111','1111','111'],
    great: ['super','cool','holy'],
    affirmation: 'my affirmation',
    happened:  ['that',' this',' and this'],
    how: 'meditate tonight',
  },
  {
    id: 2345,
    date: '2020.02.11',
    gratefull:  ['222','2222','2222'],
    great: ['I love that','bell','car'],
    affirmation: 'my affirmation is affirmed',
    happened:  ['a',' a','aaaaa'],
    how: 'aaaaaaaa',
  }
]
