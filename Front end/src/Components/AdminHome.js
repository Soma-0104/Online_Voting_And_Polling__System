import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { SubMenu } from 'react-pro-sidebar';
import { useHistory } from 'react-router-dom';
import { ProSidebarProvider } from "react-pro-sidebar";
import {
  PeopleOutlined as PeopleOutlinedIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Logout as LogoutIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
  Dashboard as DashboardIcon,
  ManageAccounts as ManageAccountsIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';
import '../Styles/adminpage.css';
import Dashboard from './Dashboard';

function AdminHome() {
  const { collapseSidebar } = useProSidebar();
  const handleLogout = () => {
    
    window.location.href = "/"; 
  };
  return (
    <div id="side1" style={{ height: "100vh", display: "flex" }}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem icon={<DashboardIcon />}>
            <Link to="/dashboard" style={{textDecoration:"none",color:"black"}}>Dashboard</Link> {/* Link to the home page */}
          </MenuItem>
          <SubMenu icon={<ManageAccountsIcon />} label="Manage">
            <MenuItem icon={<PeopleOutlinedIcon />}>
              <Link to="/voter" style={{textDecoration:"none",color:"black"}}>Voter</Link> {/* Link to the voter page */}
            </MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>
              <Link to="/candidate" style={{textDecoration:"none",color:"black"}}>Candidate</Link> {/* Link to the candidate page */}
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<AssessmentIcon />}>
            <Link to="/result-analysis" style={{textDecoration:"none",color:"black"}}>Result analysis</Link> {/* Link to the result analysis page */}
          </MenuItem>
          <MenuItem icon={<LogoutIcon /> }  style={{textDecoration:"none",color:"black"}} onClick={handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      <main className="ah">
        <div className="welcome-message">
          <h2>Welcome, Administrator!</h2>
          <p>
            You are now logged in as the admin for the Online Voting and Polling System.
          </p>
          <p>
            This system provides an easy and secure way for voters to cast their votes online
            and for candidates to participate in college-level elections and polls.
          </p>
        </div>
        {/* <div className="voting-stats">
          <h3>Voting Statistics</h3>
          <ul>
            <li>
              <span className="stat-label">Total Registered Voters:</span> 4500
            </li>
            <li>
              <span className="stat-label">Total Votes Cast:</span> 3200
            </li>
            <li>
              <span className="stat-label">Current Active Polls:</span> 3
            </li>
            <li>
              <span className="stat-label">Upcoming Polls:</span> 2
            </li>
          </ul>
        </div> */}
      </main>
    </div>
  );
}

export default AdminHome;
