import React from 'react'
import './Signup.css'

export default function Signup() {
  function feedbackMsg() {
    alert('Your account has just created!')
  }

  return (
    <form id="signup-form">
      <h3>Create your account</h3>
      <div className="signup-form-group">
        <label>Name</label>
        <input name="name" type="name"></input>
      </div>
      <div className="signup-form-group">
        <label>Lastname</label>
        <input name="lastname"></input>
      </div>
      <div className="signup-form-group">
        <label>Email</label>
        <input name="email" type="email"></input>
      </div>
      <div className="signup-form-group">
        <label>Password</label>
        <input name="password" type="password"></input>
      </div>
      <div className="signup-form-group">
        <button className="btn-simple" onClick={feedbackMsg}>
          Sign up
        </button>
      </div>
    </form>
  )
}
