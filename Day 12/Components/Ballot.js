import React, { useState } from "react";
import "../Styles/ballot.css";
import VoterPage from "./VoterPage";

function BallotPage() {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleVote = () => {
    if (selectedCandidate) {
      // Implement the logic to submit the vote to the backend
      // For simplicity, we're just showing an alert here
      setShowAlert(true);
    } else {
      alert("Please select a candidate before submitting your vote.");
    }
  };

  return (
    <>
    <VoterPage/>
    <main>
    <div className="ballot-container">
      <h1>Cast Your Vote</h1>
      <div className="candidates">
        <label>
          <input
            type="radio"
            name="candidate"
            value="Candidate 1"
            onChange={(e) => setSelectedCandidate(e.target.value)}
            checked={selectedCandidate === "Candidate 1"}
          />
          Candidate 1
        </label>
        <label>
          <input
            type="radio"
            name="candidate"
            value="Candidate 2"
            onChange={(e) => setSelectedCandidate(e.target.value)}
            checked={selectedCandidate === "Candidate 2"}
          />
          Candidate 2
        </label>
        {/* Add more candidate options as needed */}
      </div>
      <button onClick={handleVote}>Submit Vote</button>
      {showAlert && (
        <div className="alert">
          <span>Thank you for casting your vote!</span>
          <button onClick={() => setShowAlert(false)}>Close</button>
        </div>
      )}
    </div>
    </main>
    </>

  );
}

export default BallotPage;
