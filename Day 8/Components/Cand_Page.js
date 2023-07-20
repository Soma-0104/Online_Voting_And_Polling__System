import { useState } from "react";
import '../Styles/cand.css'
import { Link } from "react-router-dom";
import React from "react";
// import Side from './Sample.js';
export default function CandidatePage(){
    return(
        <div className="can">
        <h1>Candidate Page</h1>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <Link className="navbar-brand" to={'/'}>
              Home
            </Link>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
    )
}