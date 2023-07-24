import React from 'react';
import '../Styles/dashboard.css';
import { Link } from 'react-router-dom';
import Sidebar1 from './AdminPage';
const Dashboard = () => {
  return (
    
    <div className="dashboard-container">
    <Sidebar1 />  
    <div className="main-content">
      <h2>Welcome, Admin!</h2>
      <p>
        This is the dashboard page for the admin in the college level online voting website. You have access to various functionalities to manage the voting process and view the results.
      </p>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Voters</h3>
          <p>1000</p>
        </div>
        <div className="card">
          <h3>Total Candidates</h3>
          <p>15</p>
        </div>
        <div className="card">
          <h3>Total Votes Cast</h3>
          <p>850</p>
        </div>
        <div className="card">
          <h3>Result Status</h3>
          <p>Finalized</p>
        </div>
        <br></br>
      
            </div>
      </div>
         
    </div>
  );
};

export default Dashboard;
