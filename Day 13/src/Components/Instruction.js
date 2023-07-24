import React from "react";
import '../Styles/inst.css';
import '../Styles/adminpage.css'
import {Checkbox, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Instructions(){
    return(
        <div>
        <div className="in">
          <center>
            <div>
              <ol>
                <h1>Instructions for Voters</h1>
                    <li>Verify your eligibility: Before participating in the college-level election, ensure that you are eligible to vote. Typically, college-level elections are open to registered students who meet certain criteria such as being enrolled in a specific program or holding a certain status (e.g., undergraduate or graduate student).</li>

<li>Familiarize yourself with candidates and positions: Take the time to research the candidates running for various positions in the election. Read their profiles, understand their platforms, and familiarize yourself with their qualifications. Attend candidate debates, forums, or presentations to gain a better understanding of their perspectives.</li>

<li>Understand the voting process: Be aware of the voting process specific to your college. Determine whether the election will be held in person or online. Find out the designated voting location and the voting hours, or if an online platform will be used, ensure you have the necessary access and information to cast your vote.</li>

<li> Make an informed decision: Evaluate the candidates' positions, goals, and past experiences to make an informed decision. Consider their stance on issues that matter to you and align with your values. Take note of their qualifications, leadership abilities, and potential impact on the college community.</li>

<li>Cast your vote: On the day of the election or during the designated voting period, follow the instructions provided by your college. If voting in person, go to the designated location and present any required identification or documentation. If voting online, log in to the designated platform and follow the instructions to cast your vote securely.</li>

<li>Follow voting guidelines: Adhere to any guidelines set by your college for the voting process. Respect the rules, procedures, and deadlines established by the election organizers. Ensure that you are casting a single vote per position, unless the election allows for multiple selections (e.g., ranked voting).</li>

<li>Keep your vote confidential: Respect the privacy and confidentiality of your vote. Avoid discussing or sharing your voting choices with others, as it may influence their decisions or compromise the integrity of the election process.</li>

<li>Follow up on election results: Once the voting period concludes, stay informed about the election results. Find out who has been elected to various positions and how the outcomes may impact the college community. Stay engaged in the democratic process by attending inauguration ceremonies, participating in post-election discussions, or joining student organizations.</li>

<li>Remember, college-level elections provide an opportunity to shape the direction of your institution. By participating in the voting process, you can contribute to a vibrant and engaged college community.</li>
                </ol>
            <br></br>
            <div className="con1">
            <Link to='/VoterPage'>
              <button type="submit" className="co">
                Back
              </button>
              </Link>
            </div>
          </div>
        </center>
      </div>
    </div>
    )
}