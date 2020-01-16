import React, { useState, useEffect} from 'react';
import './App.css';
import uuidv4 from 'uuid/v4';
import DayList from './Components/DayList';
import Day from './Components/Day';
import Topbar from './Components/Topbar'

export const JournalContext = React.createContext();
export const ConnectionContext = React.createContext();

export default function App() {
  const [days, setDays] = useState(emptyDays);
  const [selectedDayId, setSelectedDayId] = useState();
  const selectedDay = days.find(day => day.id === selectedDayId);
  const todayDate =  createTodayDate();
  const todayDay = days.find(d => d.date === todayDate)

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  useEffect(() => {
    if (!todayDay) {
      handleDayAdd();
    }
    //get json from api
  }, [todayDay,handleDayAdd])
  
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
    };
    setDays([newDay,...days]);
    setSelectedDayId(newDay.id);
  };

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
    return (date);
  }

  // Connection

  const ConnectionContextValue = {
      handleLogOut,
      handleLogIn,
      handleLSignup
  }

  function handleLogOut(){
    setIsLoggedIn(false);
  }

  function handleLogIn(){
    setIsLoggedIn(true);
  }

  function handleLSignup(){
    //display Signup component
  }

  return (
    <JournalContext.Provider value={JournalContextValue}>
      <div className="App">
        <ConnectionContext.Provider value={ConnectionContextValue}>
          <Topbar isLoggedIn={isLoggedIn} />
        </ConnectionContext.Provider>
        {!selectedDayId && <DayList days={days} />}
        {selectedDayId && <Day content={selectedDay} />}
      </div>
    </JournalContext.Provider>
  );
}


//Data to work:
const emptyDays = [
  {
    id: 1234,
    date: '2020.1.11',
    gratefull:  ['1111','1111','111'],
    great: ['super','cool','holy'],
    affirmation: 'my affirmation',
    happened:  ['that',' this',' and this'],
    how: 'meditate tonight',
  },
  {
    id: 2345,
    date: '2020.1.10',
    gratefull:  ['222','2222','2222'],
    great: ['I love that','bell','car'],
    affirmation: 'my affirmation is affirmed',
    happened:  ['a',' a','aaaaa'],
    how: 'aaaaaaaa',
  }
]
