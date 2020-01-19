import React from 'react'

export const JournalContext = React.createContext()

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
