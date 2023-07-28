import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { FaCircleUser } from "react-icons/fa6";
import AOS from "aos";
import "../Styles/profile.css";
import VoterPage from "./VoterPage";

const Profile = () => {
  const { userDetails } = useSelector((state) => state.master);
  useEffect(() => {
    AOS.init();
  }, []);

  console.log(userDetails);
  return (
    <>
      <div className="pro">
        <div id="side" style={{ height: "100vh", display: "flex" }}>
          <VoterPage />
          <main style={{ height: "100vh" }}>
            <h1 style={{ color: "white" }}>User Profile</h1>
            <div className="profile-root">
              <div>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  data-aos="fade-up"
                >
                  <div
                    layout
                    transition={{ layout: { duration: 1 }, type: "spring" }}
                    className="card"
                  >
                    <div elevation={16}>
                      <div layout="position" id="profile-head">
                        <FaCircleUser size={100} />
                      </div>
                      <div className="profile-card-content">
                        <table className="profile-table">
                          <tbody>
                            <tr>
                              <td className="profile-field">Register Number:</td>
                              <td className="profile-value">{userDetails.regno}</td>
                            </tr>
                            <tr>
                              <td className="profile-field">Name:</td>
                              <td className="profile-value">{userDetails.name}</td>
                            </tr>
                            <tr>
                              <td className="profile-field">Gender:</td>
                              <td className="profile-value">{userDetails.gender}</td>
                            </tr>
                            <tr>
                              <td className="profile-field">Department:</td>
                              <td className="profile-value">{userDetails.dep}</td>
                            </tr>
                            <tr>
                              <td className="profile-field">Email ID:</td>
                              <td className="profile-value">{userDetails.email}</td>
                            </tr>
                            <tr>
                              <td className="profile-field">Phone Number:</td>
                              <td className="profile-value">{userDetails.mobno}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Profile;
