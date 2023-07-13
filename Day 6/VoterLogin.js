import React, { Component } from 'react'
import '../Styles/login.css';
import voter from '../Asserts/logo.jpg'
import { Link } from 'react-router-dom';
export default class VLogin extends Component {
  render() {
    return (
      <div className='login'>
        <div className="l1">
          <div className="lo">
          <img  src={voter} alt="vote" />
          </div>
        <form>
          <div className="res">
        <h3> Voter Login</h3>
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
          <Link to='/Instruction'>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </Link>
        </div>
        <p className="r">
          New User <Link to='/Signup'>Register</Link>
        </p>
        </div>
      </form>
      </div>
        </div>
    )
  }
}