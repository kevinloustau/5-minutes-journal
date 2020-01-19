import React from 'react'
import uuidv4 from 'uuid/v4'

export const JournalContext = React.createContext()

const JournalContextValue = {
  handleDayAdd,
  handleDayDelete,
  handleDaySelect,
  handleDayUnselect,
  handleDayChange,
}

function handleDayAdd() {
  const id = uuidv4()
  const newDay = {
    id: id,
    date: todayDate,
    quote: `"Brilliant things happen in calm minds. Be calm. You're brilliant.Headspace." -@Headspace`,
    gratefull: [''],
    great: [''],
    affirmation: '',
    happened: [''],
    how: '',
  }
  setDays([newDay, ...days])
  setSelectedDayId(newDay.id)
}

function handleDayDelete(selectedDayId) {
  console.log(`TO DO delete func, id${selectedDayId}`)
}

function handleDaySelect(setSelectedDayId, id) {
  setSelectedDayId(id)
}

function handleDayUnselect(setSelectedDayId) {
  setSelectedDayId(null)
}

function handleDayChange(propertyName, propertyValue) {
  let newDays = days
  let updateDay = newDays.find(d => d.id === selectedDayId)
  updateDay[propertyName] = propertyValue
  setDays(newDays)
}
