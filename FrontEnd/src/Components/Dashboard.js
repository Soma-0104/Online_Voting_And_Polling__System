import React from 'react';
import '../Styles/dashboard.css';
import { Link } from 'react-router-dom';
import Sidebar1 from './AdminPage';
const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
    <Sidebar1 />  
    <main className='ah'>
    <div className="main-content" style={{color:"white"}}>
      <h2 style={{color:"white"}}>Welcome, Admin!</h2>
      <p>
        This is the dashboard page for the admin in the college level online voting website. You have access to various functionalities to manage the voting process and view the results.
      </p>
      {/* <div className="dashboard-cards">
        <div className="card2">
          <h3>Total Voters</h3>
          <p>1000</p>
        </div>
        <div className="card2">
          <h3>Total Candidates</h3>
          <p>15</p>
        </div>
        <div className="card2">
          <h3>Total Votes Cast</h3>
          <p>850</p>
        </div>
        <div className="card2">
          <h3>Result Status</h3>
          <p>Finalized</p>
        </div>
        <br></br>
            </div> */}
             <div className="additional-content">
            <h3 style={{color:"white"}}>Recent Activities</h3>
            <ul>
              <li>Reviewed and approved candidate applications.</li>
              <li>Monitored voting process during the election day.</li>
              <li>Generated and analyzed election result reports.</li>
              <li>Conducted a meeting with election officials.</li>
            </ul>
            <h3 style={{color:"white"}}>Next Steps</h3>
            <p>
              Prepare for the upcoming elections, coordinate with the IT team to ensure the voting website's stability, and promote the voting process among the college community.
            </p>
          </div>
      </div>
      </main>
    </div>
    </>
  );
};

export default Dashboard;
