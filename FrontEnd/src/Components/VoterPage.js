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
              <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem icon={<AccountBoxIcon />}>
                Profile
            </MenuItem>
              </Link>
              {/* <Link to="/viewreport" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem icon={<AssessmentIcon />}>
                View Report
            </MenuItem>
              </Link> */}
      
              <Link to="/viewcandidates" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem icon={<PeopleIcon />}>
                View Candidates
            </MenuItem>
              </Link>
      
            <Link to="/Instruction" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem icon={<QuestionAnswerIcon />}>
              View Instructions
          </MenuItem>
            </Link>
            <Link to="/Ballot" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem icon={<BallotIcon />}>
              Ballot
          </MenuItem>
            </Link>
          <MenuItem icon={<LogoutIcon />} style={{ textDecoration: "none", color: "black" }} onClick={handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar> 
    </div>
  );
}

export default VoterPage;
