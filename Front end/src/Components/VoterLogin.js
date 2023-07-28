import React  from "react";
import '../Styles/adlogin.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SignInSchema } from "../Scheme/loginScheme";
import UserAuthService from '../Service/UserAuthService';
import { useDispatch } from "react-redux";
import { addEmails,addToken } from '../Store/MasterSlice';
  const VoterLogin = () => {
    const dispatch=useDispatch();
    const initialState = {
      email: "",
      password: "",
    };
    const { values, errors,  handleBlur, handleChange,handleSubmit, touched } =
      useFormik({
        initialValues: initialState,
        validationSchema: SignInSchema,
        onSubmit: (values, action) => {
          console.log(values);
          eventLogin();
          action.resetForm();
        }
      })
      
    const eventLogin = async () => {
      try {
        const response = await UserAuthService.loginUserWithEmailAndPassword(values);
        console.log(response);
        var token = response.data.accessToken;
        var userEmail = response.data.email;
  
        if (response.message !== "Request failed with status code 400") {
          setTimeout(() => {
            dispatch(addEmails(userEmail));
            dispatch(addToken(token));
            alert("Successfully submitted!");
            navigate("/VoterHome");
          }, 200);
        }
        else {
          <h1>Login failed:(</h1>
          alert("Login failed:(");
        }
      }
      catch (error) {
        console.log(error);
      }
    };
    const navigate = useNavigate();  
  return (
<>
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            Home
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={'/Aboutus'}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/feed'}>
                  FeedBack
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className="afull">
      <div className="register-form">
        <div className="admin-login">
          <h2>Voter Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                variant="standard"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
              style={{ marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
                required
              />
              {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}

            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                variant="standard"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                style={{ marginTop: "20px" }}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
            </div>
            <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
       
          <p className="r">
          <br></br>
          New User <Link to='/Voter_reg'>Register</Link>
        </p>
  
        </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default VoterLogin;