import React from "react";
import ad from '../Asserts/ad.jpg'
import voter from '../Asserts/voter.png'
import '../Styles/select.css';
import candidate from '../Asserts/candidate.jpg'
import { Link } from "react-router-dom";
export default function Select(){
    return(
        <div className="select">
            {/* <h1>Happy Voting</h1> */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <Link className="navbar-brand" to={'/'}>
              Home
            </Link>
              {/* <ul className="navbar-nav ml-auto">
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
              </ul> */}
            </div>
          </div>
        </nav>
                <div className="box">
                <div className="full">
                <div className="div1">
                    <Link to='/ALogin'>
                  <div className="img1">
                    <img  src={ad} alt="user1" />
                    <br/>
                    </div>
                      Admin
                      </Link>
                </div>
                <div className="div2">
                    <Link to='/Login'>
                  <div className="img2">
                    <img  src={candidate} alt="user2" />
                    <br/>
                    </div>
                    Candidate
                    </Link>
        </div>
                <div className="div3">
                    <Link to='/VLogin'>
                  <div className="img2">
                    <img  src={voter} alt="user3" />
                    <br/>
                    </div>
                      Voter </Link>
                      </div>
        </div>
        </div>
        </div>
    )
}
