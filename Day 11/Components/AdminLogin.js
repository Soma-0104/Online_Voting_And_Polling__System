import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import '../Styles/adlogin.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
    navigate('/AdminPage');
  };

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
                <Link className="nav-link" to={'/Contactus'}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className='afull'>
    <div className="register-form">
      <div className='admin-login'>
        <h1 style={{textAlign:'center'}}>Admin Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        
        <br></br>
        <div className="form-group">
          <center>
           
          <button type="submit" className="btn btn-primary">
            Login
          </button>
  
          </center>
        </div>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};
export default AdminLogin;
