import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/cand.css';
import Box from '@mui/material/Box';
import Sidebar1 from './AdminPage';

function CandidateA() {
  const accessToken ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLDcyNzcyMWV1aXQxNTJAc2tjZXQuYWMuaW4iLCJpc3MiOiJzYXNpIiwiaWF0IjoxNjkwNDM5MzM4LCJleHAiOjE2OTA1MTEzMzh9.E8YxYlBfKQHRVIh9j8SvvdKrYuP0KpX-OO1dzRFpgZuhPJqYLjYqAnc5QJ0e-_-NgVT8Rf-mkWVLAKRh5xSxTg";
  const [candidates, setCandidates] = useState([]);
  const [newCandidate, setNewCandidate] = useState({
    firstName: '',
    lastName: '',
    partyName: '',
    position: '',
    registerNumber: '',
    email:''
  });
  const positionOptions = ['President', 'Vice President'];
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
   <div id="side" style={{ height: "100vh", display: "flex" }}>
    <Sidebar1/>
    <main  className='ch' style={{height:"100vh"}}>
    <div className="candidate-add-page">
    <h1>Candidate Add Page</h1>
       {/* Table to display the candidates */}
       {candidates.length > 0 && (
         <table className="candidates-table">
           <thead style={{color:"black"}}>
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
      </main>
     </div>
    </>
  );
}

export default CandidateA;