import '../Styles/cand.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MiniDrawerr from "./VoterPage";
import axios from 'axios';
import VoterPage from './VoterPage';
function CandidateList() {
const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5LFNvbWEwMTAxQGdtYWlsLmNvbSIsImlzcyI6InNhc2kiLCJpYXQiOjE2OTAxNzA5NTYsImV4cCI6MTY5MDE4ODk1Nn0.lXXD4YpV8o5eQd5Tl6xdKwHOObDXpep6N-FKYbKuS7Qrqwm5REgjHcpfbPgjY1la6R0FxUUPlTQTRyXM1xJqSQ";
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
    <Box sx={{ display: 'flex' }}>
    
    <VoterPage/>
         <div className="candidate-add-page">
    <h1>View Candidates</h1>
       {candidates.length > 0 && (
         <table className="candidates-table">
           <thead>
             <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Party Name</th>
               <th>Position</th>
               <th>Register Number</th>
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
    </Box>
     </>
  );
  }
  export default CandidateList;