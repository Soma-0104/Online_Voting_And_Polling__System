// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import VoterLogin from './Components/VoterLogin';
import React from 'react';
import VoterRegistration from './Components/VoterReg';
import Sidebar1 from './Components/AdminPage';
import AboutUs from './Components/Aboutus';
import ContactUs from './Components/Contactus';
import VoterPage from './Components/VoterPage';
import Instructions from './Components/Instruction';
import Dashboard from './Components/Dashboard';
import CandidateAdd from './Components/Candidateform';
import BallotPage from './Components/Ballot';
import CandidateList from './Components/CandidateList';
function App() {
  return (
     <Router>
    <div className='App'>
      <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/Aboutus" element={<AboutUs/>}/> 
      <Route path="/AdminLogin" element={<AdminLogin/>}/> 
      <Route path="/VoterLogin" element={<VoterLogin/>}/> 
      <Route path="/VoterPage" element={<VoterPage/>}/> 
      <Route path="/Voter_reg" element={<VoterRegistration/>}/>  
      <Route path="/AdminPage" element={<Sidebar1/>}/> 
      <Route path="/candidate" element={<CandidateAdd/>}/> 
      <Route path="/Contactus" element={<ContactUs/>}/> 
      <Route path="/VoterPage" element={<VoterPage/>}/> 
      <Route path="/Instruction" element={<Instructions/>}/> 
      <Route path="/Ballot" element={<BallotPage/>}/> 
      <Route path="/dashboard" element={<Dashboard/>}/> 
      <Route path="/viewcandidates" element={<CandidateList/>}/> 
      </Routes>
  </div>
     </Router>
  );
} 
export default App;
