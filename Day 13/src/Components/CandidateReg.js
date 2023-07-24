import React, { useState } from 'react';
import '../Styles/vreg.css';
import { Link } from 'react-router-dom';
import voting from '../Assets/voting.avif'
import 'bootstrap/dist/css/bootstrap.min.css';
const CandidateRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    registerNumber: '',
    year: '',
    department: '',
    mobileNumber: '',
    position: '',
    partyName: '',
    partySymbol: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePartySymbolChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      partySymbol: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here (e.g., API call or state update).
      // Show an alert message to indicate successful registration
      alert('Registration successful!');
      // Reset the form after successful submission if needed
      setFormData({
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        gender: '',
        registerNumber: '',
        year: '',
        department: '',
        mobileNumber: '',
        position: '',
        partyName: '',
        partySymbol: null,
      });
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Add validation rules for each field
    if (!data.name) {
      errors.name = 'Name is required';
    }

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!data.dateOfBirth) {
      errors.dateOfBirth = 'Date of birth is required';
    }

    if (!data.gender) {
      errors.gender = 'Gender is required';
    }

    if (!data.registerNumber) {
      errors.registerNumber = 'Register number is required';
    }

    if (!data.year) {
      errors.year = 'Year is required';
    }

    if (!data.department) {
      errors.department = 'Department is required';
    }

    if (!data.mobileNumber) {
      errors.mobileNumber = 'Mobile number is required';
    } else if (!isValidMobileNumber(data.mobileNumber)) {
      errors.mobileNumber = 'Invalid mobile number format';
    }

    if (!data.position) {
      errors.position = 'Position is required';
    }

    if (!data.partyName) {
      errors.partyName = 'Party name is required';
    }

    if (!data.partySymbol) {
      errors.partySymbol = 'Party symbol is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobileNumber = (mobileNumber) => {
    // Use a regular expression to validate mobile number format
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobileNumber);
  };

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <Link className="navbar-brand" to={'/'}>
              Home
            </Link>
            </div>
          </div>
        </nav>
    <div className='reg'>
    <div className="registration-form-container">
          {/* <center> */}
        <div className='reg1'>
        <h1 style={{textAlign:"center"}}>Candidate Registration</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
          />
          {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
        </div>

        <div className="form-group">
          <label>Register Number</label>
          <input
            type="text"
            name="registerNumber"
            value={formData.registerNumber}
            onChange={handleChange}
            className={`form-control ${errors.registerNumber ? 'is-invalid' : ''}`}
          />
          {errors.registerNumber && <div className="invalid-feedback">{errors.registerNumber}</div>}
        </div>

        <div className="form-group">
          <label>Year</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className={`form-control ${errors.year ? 'is-invalid' : ''}`}
          />
          {errors.year && <div className="invalid-feedback">{errors.year}</div>}
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={`form-control ${errors.department ? 'is-invalid' : ''}`}
          />
          {errors.department && <div className="invalid-feedback">{errors.department}</div>}
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
          />
          {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
        </div>

        <div className="form-group">
          <label>Position</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className={`form-control ${errors.position ? 'is-invalid' : ''}`}
          >
            <option value="">Select Position</option>
            <option value="president">President</option>
            <option value="vice-president">Vice President</option>
          </select>
          {errors.position && <div className="invalid-feedback">{errors.position}</div>}
        </div>

        <div className="form-group">
          <label>Party Name</label>
          <input
            type="text"
            name="partyName"
            value={formData.partyName}
            onChange={handleChange}
            className={`form-control ${errors.partyName ? 'is-invalid' : ''}`}
          />
          {errors.partyName && <div className="invalid-feedback">{errors.partyName}</div>}
        </div>

        <div className="form-group">
          <label>Party Symbol (File)</label>
          <input
            type="file"
            name="partySymbol"
            onChange={handlePartySymbolChange}
            className={`form-control ${errors.partySymbol ? 'is-invalid' : ''}`}
          />
          {errors.partySymbol && <div className="invalid-feedback">{errors.partySymbol}</div>}
        </div>
         <Link to='/VoterLogin'>
        <button type="submit" className="btn btn-primary">Submit</button></Link>
      </form>
      </div>
      {/* </center> */}
    </div>

  </div>
  </>
  );
};

export default CandidateRegistration;