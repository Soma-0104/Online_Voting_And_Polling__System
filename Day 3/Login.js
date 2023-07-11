import React, { Component } from 'react'
import '../Styles/login.css';
export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <div className="l1">
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Login Id</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
    
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
        </div>
    )
  }
}