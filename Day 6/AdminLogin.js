import React, { Component } from 'react'
import '../Styles/Admin.css';
import admin from '../Asserts/admin.jpg'
export default class ALogin extends Component {
  render() {
    return (
      <div className='login'>
        <div className="l1">
        <div className="log">
          <img  src={admin} alt="vote" />
          </div>
      <form>
        <h3>Admin Login In</h3>
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
        <p className="r">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
        </div>
    )
  }
}