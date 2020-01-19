import React from 'react'
import './Signup.css'

export default function Signup() {
  return (
    <form id="signup-form">
      <h3>Sign up</h3>
      <div className="signup-form-group">
        <label>Name</label>
        <input name="name"></input>
      </div>
      <div className="signup-form-group">
        <label>Lastname</label>
        <input name="lastname"></input>
      </div>
      <div className="signup-form-group">
        <label>Email</label>
        <input name="email"></input>
      </div>
      <div className="signup-form-group">
        <label>Password</label>
        <input name="password"></input>
      </div>
      <div className="signup-form-group">
        <button className="btn-simple">Submit</button>
      </div>
    </form>
  )
}
