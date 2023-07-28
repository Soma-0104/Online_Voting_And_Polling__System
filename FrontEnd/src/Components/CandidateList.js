import '../Styles/cand.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MiniDrawerr from "./VoterPage";
import axios from 'axios';
import VoterPage from './VoterPage';
function CandidateList() {
const accessToken ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLDcyNzcyMWV1aXQxNTJAc2tjZXQuYWMuaW4iLCJpc3MiOiJzYXNpIiwiaWF0IjoxNjkwMzQzMzYwLCJleHAiOjE2OTA0MTUzNjB9.hB7V7DuukI8y7Y0xXhEgwrPdAq9T6I5d4I0mpMWzTCZqV66GWoAHnDsc7WUggtFgBoIInV7Ux5NS-Xut8gwyRQ";
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    fetchCandidates();
  }, []);
  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:8080/candidate/get', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCandidates(response.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };
  
  return (
    <>
    <div id="side" style={{ height: "100vh", display: "flex" }}>
    <VoterPage/>
    <main  style={{height:"100vh"}}>
         <div className="candidate-add-page">
    <h1 style={{color:"white"}}>Candidates</h1>
       {candidates.length > 0 && (
         <table className="candidates-table">
           <thead>
             <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Party Name</th>
               <th>Position</th>
               <th>Register Number</th>
             </tr>
           </thead>
           <tbody>
             {candidates.map((candidate, index) => (
               <tr key={index}>
                 <td>{candidate.firstName}</td>
                 <td>{candidate.lastName}</td>
                 <td>{candidate.partyName}</td>
                 <td>{candidate.position}</td>
                 <td>{candidate.registerNumber}</td>
               </tr>
             ))}
           </tbody>
         </table>
       )}
     </div>
     </main>
     </div>
     </>
  );
  }
  export default CandidateList;