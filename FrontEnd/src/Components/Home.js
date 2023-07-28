import React from "react";
import ad from '../Assets/ad.jpg'
import voter from '../Assets/voter.png'
import '../Styles/home.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="select">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            Home
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={'/Aboutus'}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/feed'}>
                  FeedBack
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="box">
        <div className="full">
          <div className="div1">
            <Link to='/AdminLogin'>
              <div className="img1">
                <img className="ig" src={ad} alt="user1" />
                <br />
              </div>
              Admin
            </Link>
          </div>
          <div className="div3">
            <Link to='/VoterLogin'>
              <div className="img2">
                <img className='ig' src={voter} alt="user3" />
                <br />
              </div>
              Voter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
