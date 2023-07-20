import React, { Component } from 'react'
import '../Styles/login.css';
import voter from '../Asserts/logo.jpg'
import { Link } from 'react-router-dom';
import VoterPage from './VoterDetails';
// import Voter from './Voter_Page';
export default class VLogin extends Component {
  render() {
    return (
      <>
       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
                {/* <li className="nav-item">
                <Link className="nav-link" to={'/profile'}>
              Profile
            </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to={'/VoterLogin'}>
                    Voter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
          <Link to='/Voter_Page'>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </Link>
        </div>
        <p className="r">
         <Link to='/Signup'> New User Register</Link>
        </p>
        </div>
      </form>
      </div>
        </div>
        </>
    )
  }
}