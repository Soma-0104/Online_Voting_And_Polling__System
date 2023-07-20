import React, { useState } from 'react'
import '../Styles/login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import candidate from '../Asserts/clog.jpg'
import Select from './Select';
import { Link } from 'react-router-dom';
const CLogin = ()=>{
    return (
      <>
       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    Candidate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/ALogin'}>
                    Admin
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
          <Link to ='/Cand_Page'>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </Link>
        </div>
        <p className="r">
         <Link to='/Candidate_reg'> New User Register</Link>
        </p>
        </div>
      </form>
      </div>
        </div>
        </>
    )
  }
export default CLogin;