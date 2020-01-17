import React from 'react';
import './Signup.css';

export default function Signup(){

    return (
        <form  id='signup-form'>
            <label>Name</label>
            <input name='name'></input>
            <label>Lastname</label>
            <input name='lastname'></input>
            <label>Email</label>
            <input name='email'></input>
            <label>Password</label>
            <input name='password'></input>
            <button>Submit</button>
        </form>
    )
    
}