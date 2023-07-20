import React, { Component } from 'react'
import '../Styles/Admin.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import admin from '../Asserts/admin.jpg'
import Sidebar from './Sidebar';
export default class ALogin extends Component {
  render() {
    return(
      <>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <Link className="navbar-brand" to={'/'}>
              Home
            </Link>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/AdminLogin'}>
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    Candidate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/VoterLogin'}>
                    Voter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
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
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="d-grid">
          <Link to="/AdminPage">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </Link>
        </div>
        <p className="r">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
        </div>
        </>
    )
  }
}