import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/cand.css';
import Box from '@mui/material/Box';
import Sidebar1 from './AdminPage';
import { useNavigate } from 'react-router-dom';

function CandidateAdd() {
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
  const navigate=useNavigate();
  const handleAddCandidateList=()=>{
    navigate('/Clist');
  }
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
      window.alert('Candidate added successfully!');
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
      window.alert('Candidate added successfully!');
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
       <div className="form-container">
         <input
           type="text"
           name="firstName"
           placeholder="First Name"
           required
           value={newCandidate.firstName}
           onChange={handleInputChange}
         />
      
         <input
           type="text"
           name="lastName"
           placeholder="Last Name"
           required
           value={newCandidate.lastName}
           onChange={handleInputChange}
         />
           
         <input
           type="text"
           name="partyName"
           placeholder="Party Name"
           required
           value={newCandidate.partyName}
           onChange={handleInputChange}
         />
         <input
           type="text"
           name="position"
           placeholder="position"
           required
           value={newCandidate.position}
           onChange={handleInputChange}
         />
         <input
           type="text"
           name="registerNumber"
           placeholder="Register Number"
           required
           value={newCandidate.registerNumber}
           onChange={handleInputChange}
         />
       
         <input
           type="email"
           name="email"
           placeholder="email"
           required
           value={newCandidate.email}
           onChange={handleInputChange}
         />
         <div className="buttons-container">
           <button className="btn btn-primary" onClick={handleAddCandidate}>
             Add
           </button>
                 </div>
                 <br/>
         <div className="buttons-container">
           <button className="btn btn-primary" onClick={handleAddCandidateList}>
             View Candidate List
           </button>
                 </div>
       </div>
     </div>
      </main>
     </div>
    </>
  );
}

export default CandidateAdd;