import React from "react";
import ad from '../Asserts/ad.jpg'
import '../Styles/select.css';
import candidate from '../Asserts/candidate.jpg'
import { Link } from "react-router-dom";

export default function Select(){
    return(
        <div className="select">
            <h1>Happy Voting</h1>
                <div className="full">
                <div className="div1">
                  {/* <div className="img1"> */}
                    <img  src={ad} alt="user1" />
                    <br/>
                    {/* </div> */}
                    <Link to='/ALogin'>AdminLogin</Link>
                </div>
                <div className="div2">
                  {/* <div className="img2"> */}
                    <img  src={candidate} alt="user2" />
                    <br/>
                    {/* </div> */}
                    <Link to='/CLogin'>candidate Login</Link>
        </div>
        </div>
        </div>
    )
}
