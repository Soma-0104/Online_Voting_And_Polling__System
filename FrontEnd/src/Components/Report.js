import React from "react";
import { Link } from "react-router-dom";
import "../Styles/report.css"; // Import the CSS file for styling
import VoterPage from "./VoterPage";

function Report() {
  // Sample election results data for the college level online voting system
  const electionResults = [
    { candidate: "Candidate A", votes: 250, percentage: 45 },
    { candidate: "Candidate B", votes: 180, percentage: 32 },
    { candidate: "Candidate C", votes: 120, percentage: 23 },
  ];

  return (
    <>
     <div id="side" style={{ height: "100vh", display: "flex" }}>
            <VoterPage/>
            <main style={{height:"100vh"}}>
    <div className="report-container"> {/* Apply the CSS class for the box */}
      <h2>College Level Online Voting System - Election Report</h2>
      <p>
        Below are the election results and statistics for the college level online voting system.
      </p>

      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {electionResults.map((result, index) => (
            <tr key={index}>
              <td>{result.candidate}</td>
              <td>{result.votes}</td>
              <td>{`${result.percentage}%`}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <Link to="/VoterHome">Back</Link> {/* Link back to the Voter Dashboard */}
      </p>
    </div>
      </main>
    </div>
    </>
  );
}

export default Report;
