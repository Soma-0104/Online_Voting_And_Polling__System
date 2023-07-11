import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/Login'
import Select from './Components/Select'
import ALogin from './Components/AdminLogin'
import './App.css';
import CandidateRegistrationForm from './Components/Candidate_reg'
import RegistrationForm from './Components/Signup'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              Home page
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            {/* <div className="top"> */}
        <div className="auth-wrapper">
         
            <Routes>
            <Route exact path="/" element={<Select />} />
            <Route exact path="/CLogin" element={<CandidateRegistrationForm/>} />
            <Route path="/Alogin" element={<ALogin />} />
            <Route path="/sign-up" element={<RegistrationForm />} />
             <Route path="/sign-in" element={<Login />} />
            </Routes>
    
          </div>
            </div>
        {/* </div> */}
    </Router>
  )
}
export default App