import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/cand.css';
import Box from '@mui/material/Box';
import Sidebar1 from './AdminPage';

function CandidateAdd() {
  const accessToken ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLHNvbWFAZ21haWwuY29tIiwiaXNzIjoic2FzaSIsImlhdCI6MTY5MDE3ODcxMywiZXhwIjoxNjkwMTk2NzEzfQ.-qbfqG4c3dbIKoAU8jFoiOYLoMxM-wdaRVMcKOuNRGqfaNXR9fciEJGaGSW1i0Jec4Py1pS9c-AZJdqjyt5zMw";
  const [candidates, setCandidates] = useState([]);
  const [newCandidate, setNewCandidate] = useState({
    firstName: '',
    lastName: '',
    partyName: '',
    position: '',
    registerNumber: '',
    email:''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate((prevCandidate) => ({
      ...prevCandidate,
      [name]: value
    }));
  };

  const handleAddCandidate = async () => {
    try {
      const response = await axios.post('http://localhost:8080/candidate/save', newCandidate, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }); 
      setCandidates((prevCandidates) => [...prevCandidates, response.data]);
      setNewCandidate({
        firstName: '',
        lastName: '',
        partyName: '',
        position: '',
        registerNumber: '',
        email:''
      });
    } catch (error) {
      console.error('Error adding candidate:', error);
    }
  };

  const handleUpdateCandidate = async (index) => {
    try {
      const response = await axios.put(`/api/candidate/${candidates[index].id}`, newCandidate); 
      const updatedCandidates = [...candidates];
      updatedCandidates[index] = response.data;
      setCandidates(updatedCandidates);
      setNewCandidate({
        firstName: '',
        lastName: '',
        partyName: '',
        position: '',
        registerNumber: '',
        email:''
      });
    } catch (error) {
      console.error('Error updating candidate:', error);
    }
  };

  return (
    <>
    <div className='add'>
      <Box sx={{ display: 'flex' }}>
        <Sidebar1 />
        <div className="candidate-add-page">
    <h1>Candidate Add Page</h1>
       <div className="form-container">
         <input
           type="text"
           name="firstName"
           placeholder="First Name"
           value={newCandidate.firstName}
           onChange={handleInputChange}
         />
         <br/>
         <br/>
         <input
           type="text"
           name="lastName"
           placeholder="Last Name"
           value={newCandidate.lastName}
           onChange={handleInputChange}
         />
           <br/>
           <br/>
         <input
           type="text"
           name="partyName"
           placeholder="Party Name"
           value={newCandidate.partyName}
           onChange={handleInputChange}
         />
           <br/>
           <br/>
         <input
           type="text"
           name="position"
           placeholder="Position"
           value={newCandidate.position}
           onChange={handleInputChange}
         />
           <br/>
           <br/>
         <input
           type="text"
           name="registerNumber"
           placeholder="Register Number"
           value={newCandidate.registerNumber}
           onChange={handleInputChange}
         />
           <br/>
           <br/>
         <input
           type="email"
           name="email"
           placeholder="email"
           value={newCandidate.email}
           onChange={handleInputChange}
         />
         <div className="buttons-container">
           <button className="btn btn-primary" onClick={handleAddCandidate}>
             Add
           </button>
                 </div>
       </div>
      
     
       {/* Table to display the candidates */}
       {candidates.length > 0 && (
         <table className="candidates-table">
           <thead>
             <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Party Name</th>
               <th>Position</th>
               <th>Register Number</th>
               <th>Email</th>
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
                 <td>{candidate.email}</td>
               </tr>
             ))}
           </tbody>
         </table>
       )}
     </div>
      </Box>
     </div>
    </>
  );
}

export default CandidateAdd;