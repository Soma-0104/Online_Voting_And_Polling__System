import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
import Sidebar1 from '../Components/AdminPage'
import '../Styles/voter.css'
function VoterList() {

  const [voterdata, voterchange] = useState([]);

  useEffect(() => {
    const accessToken ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLDcyNzcyMWV1aXQxNTJAc2tjZXQuYWMuaW4iLCJpc3MiOiJzYXNpIiwiaWF0IjoxNjkwNDM5MzM4LCJleHAiOjE2OTA1MTEzMzh9.E8YxYlBfKQHRVIh9j8SvvdKrYuP0KpX-OO1dzRFpgZuhPJqYLjYqAnc5QJ0e-_-NgVT8Rf-mkWVLAKRh5xSxTg";
    axios
      .get('http://localhost:8080/api/v4/user/get', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        voterchange(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div id="side" style={{ height: "100vh", display: "flex" }}>
    <Sidebar1/>
    <main  style={{height:"100vh"}}>
    <div className="candidate-add-page">
    <h1 style={{color:"white"}}>Voter Detaiils</h1>
    <div className='card-title' style={{color:"white"}}>
              <div className='card-body'>
                <table border={{color:"white"}}>
                  <thead >
                    <tr >
                      <td>Id</td>
                      <td >Name</td>
                      <td>Register No</td>
                      <td >Gender</td>
                      <td>Department</td>
                      <td >Contact</td>
                    </tr>
                  </thead>
                  <tbody>
                    {voterdata &&
                      voterdata.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.regno}</td>
                          <td>{item.gender}</td>
                          <td>{item.dep}</td>
                          <td>{item.mobno}</td>
                          <td>                            
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                </div>
              </div> 
              </div> 
  </main>
  </div>
     </>
  );
}
 export default VoterList;