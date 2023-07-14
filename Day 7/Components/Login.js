import React, { useState } from 'react'
import '../Styles/login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import candidate from '../Asserts/clog.jpg'
import { useDispatch } from 'react-redux';
// import { Login,Logout, login } from '../Features/User';
// import { login } from '../Features/User';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Select from './Select';
import { Link } from 'react-router-dom';
const CLogin = ()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(state => state.user.value)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const errors = {};

    
    if(!email){
        errors.email="Email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Invalid Email "
    }
    else{
        errors.email ="";
    }

    if(!password){
        errors.password ="Password is requird";
    }
    else if(password.length<8){
        errors.password="Password length should be greater than 8";
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$*!%?&]{8,}$/.test(password)){
        errors.password="Password should contain one uppercase,lowercase,digit,special character";
    }
    else{
        errors.password="";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    // event.preventDefault();

    if (validateForm()) {
      // Form is valid, perform further actions (e.g., submit data)
      console.log('Form submitted:', { email, password });
    }
  };
    return (
      <>
       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <Link className="navbar-brand" to={'/'}>
              Home
            </Link>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    Candidate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/VoterLogin'}>
                    Voter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <div className='login'>
        <div className="l1">
            <div className="lo">
          <img  src={candidate} alt="vote" />
          </div>
        <form>
          <div className="res">
        <h3>Candidate Login</h3>
        <div className="mb-3">
          <label>Login Id</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="d-grid">
          <Link to ='/Cand_Page'>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </Link>
        </div>
        <p className="r">
          New User <Link to='/Candidate_reg'>Register</Link>
        </p>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit}>
      <div>
        <TextField required value={email} id="Email" label="Email" input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>}
      </div>
      <br></br>
      <div>

        <TextField required value={password} id="Password" label="Password" input type="password"  onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
      </div>
      <br></br>
      <Button className='button'variant='contained' style={{color:'white'}} onClick={()=>{dispatch(login({email}));navigate("/Select")}}> 
      <Link to='/Select'>Login!</Link> </Button> <br></br><br></br>  
      <br></br>
        <Link to='/Candidate_reg' style={{color:'blue'}}>Don't have an account? Register</Link>
       
      </form> */}
      </div>
        </div>
        </>
    )
  }
export default CLogin;