import React from 'react'

export const ConnectionContext = React.createContext();

export const ConnectionContextValue = {
  handleLogOut,
  handleLogIn,
  handleSignup
}

function handleLogOut(setIsLoggedIn){
setIsLoggedIn(false);
}

function handleLogIn(setIsLoggedIn,setSignup){
setIsLoggedIn(true);
setSignup(false)
}

function handleSignup(setSignup){
setSignup(true);
}