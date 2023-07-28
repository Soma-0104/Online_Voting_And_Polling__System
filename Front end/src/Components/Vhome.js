import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
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
import "../Styles/voterhome.css";
function VoterHomePage(){
    const { collapseSidebar } = useProSidebar();
    const handleLogout = () => {
    window.location.href = "/";
    };
  return (
    <>
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
    <main className="vh">
    <div className="container1">
      <header>
        <h1 style={{color:"white",fontWeight:"bolder"}}>Happy Voting!!</h1>
        <p className="lead" style={{color:"white"}}>Cast your vote and make your voice heard!</p>
      </header>
      <div className="card1">
        <div className="card-body">
          <h2 className="card-title">Profile</h2>
          <p className="card-text">
            "Your vote is a declaration of your hopes and dreams for the
            future." - Unknown
          </p>
          <Link to="/profile" className="btn btn-primary home-btn">
            Go to Profile
          </Link>
        </div>
      </div>
      <div className="card1">
        <div className="card-body">
          {/* <h2 className="card-title">View Report</h2> */}
          <p className="card-text">
            "The power of voting is not just the act of voting, but also the
            power of speaking your mind through it." - Unknown
          </p>
          {/* <Link to="/viewreport" className="btn btn-primary home-btn">
            View Report
          </Link> */}
        </div>
      </div>
    </div>
    </main>
    </>
  );
}
export default VoterHomePage;
