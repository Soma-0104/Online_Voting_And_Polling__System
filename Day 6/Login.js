import React, { Component } from 'react'
import '../Styles/login.css';
import candidate from '../Asserts/clog.jpg'
import { Link } from 'react-router-dom';
export default class CLogin extends Component {
  render() {
    return (
      <div className='login'>
        <div className="l1">
            <div className="lo">
          <img  src={candidate} alt="vote" />
          </div>
        <form>
          <div className="res">
        <h3>Candidate Login</h3>
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
          New User <Link to='/Candidate_reg'>Register</Link>
        </p>
        </div>
      </form>
      </div>
        </div>
    )
  }
}