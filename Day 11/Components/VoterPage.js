import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { SubMenu } from "react-pro-sidebar";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PeopleIcon from '@mui/icons-material/People';
import BallotIcon from '@mui/icons-material/Ballot';
import {
  QuestionAnswer as QuestionAnswerIcon,
  Logout as LogoutIcon,
  MenuOutlined as MenuOutlinedIcon,
  Dashboard as DashboardIcon,
  ManageAccounts as ManageAccountsIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";
import "../Styles/adminpage.css";

function VoterPage() {
  const { collapseSidebar } = useProSidebar();

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div id="side" style={{ height: "100vh", display: "flex" }}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Voter</h2>
          </MenuItem>

          <MenuItem icon={<DashboardIcon />}>
            <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
              Dashboard
            </Link>
          </MenuItem>
         
            <MenuItem icon={<AccountBoxIcon />}>
              <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
                Profile
              </Link>
            </MenuItem>
            <MenuItem icon={<AssessmentIcon />}>
              <Link to="/viewreport" style={{ textDecoration: "none", color: "black" }}>
                View Report
              </Link>
            </MenuItem>
      
            <MenuItem icon={<PeopleIcon />}>
              <Link to="/viewcandidates" style={{ textDecoration: "none", color: "black" }}>
                View Candidates
              </Link>
            </MenuItem>
      
          <MenuItem icon={<QuestionAnswerIcon />}>
            <Link to="/Instruction" style={{ textDecoration: "none", color: "black" }}>
              View Instructions
            </Link>
          </MenuItem>
          <MenuItem icon={<BallotIcon />}>
            <Link to="/Ballot" style={{ textDecoration: "none", color: "black" }}>
              Ballot
            </Link>
          </MenuItem>
          <MenuItem icon={<LogoutIcon />} style={{ textDecoration: "none", color: "black" }} onClick={handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <h1 style={{ color: "white", marginLeft: "2rem" }}>Happy Voting</h1>
      </main>
    </div>
  );
}

export default VoterPage;
