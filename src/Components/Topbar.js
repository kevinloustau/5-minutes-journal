import React, { useContext } from 'react';
import './Topbar.css'
import {JournalContext, ConnectionContext} from '../App';

export default function Topbar(pros){
  
  const connectionContext = useContext(ConnectionContext);
  const journalContext = useContext(JournalContext);

  function boutonsDiv(){
    if (pros.isLoggedIn) { 
      return (
        <button className='btn-text' onClick={connectionContext.handleLogOut}>Log out</button>
      )
    } else {
      return (
        <>
          <button  className='btn-text' onClick={connectionContext.handleLogIn}>Log in</button>
          <button id='signup'>Sign up</button>
        </>
      )
    }
  }

  return(
    <div id='topbar'>
      <h1 id='main-title'onClick={journalContext.handleDayUnselect}>Five minutes journal</h1>
      <div id='top-right'>
        {boutonsDiv()}
      </div>
    </div>
  )
}
