import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/feedback.mp4'
import "../Styles/feedback.css"
function CommentsForms() {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Error, setError] = useState(false);
  const [description, setdescription] = useState('');
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Username.length === 0 || Email.length === 0 || Mobile.length !== 10) {
      setError(true);
      return;
    }
    const data = {
      name: Username,
      email: Email,
      description: description,
    };

    axios.post("http://localhost:8081/addsupport", data)
      .then((response) => {
        console.log(response.data); // Server response, you can handle it as needed
        alert("Successfully submitted!");
        navigate('/');
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        alert("Failed to submit data. Please try again later.");
      });
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
                <Link className="nav-link" to={'/feed'}>
                  FeedBack
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className="Registration">
    <div class="split left">
  <div class="centered">
      <video className='videoTag' autoPlay loop muted>
    <source src={logo} type='video/mp4'/>
</video>
      </div>
      </div>
      <div class="split right">
  <div class="centered">
      <center>
      <Form className="form" onSubmit={handleSubmit} style={{width:"100%"}}>
        <div>
          <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20">
            <h3>Feedback</h3>
          </Form.Group>
          <br />
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              {/* <Form.Label className='input'>Username</Form.Label> */}
              <Form.Control placeholder='Name' onChange={e => setUsername(e.target.value)} />
              {Error && Username.length <= 0 ?
                <Form.Label className='error'>Name can't be Empty </Form.Label> : ""}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              {/* <Form.Label className='input'>Email</Form.Label> */}
              <InputGroup>
                <Form.Control placeholder='Email' onChange={e => setEmail(e.target.value)} />
                <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
              </InputGroup>
              {Error && Email.length <= 0 ?
                <label className='error'>Email can't be Empty </label> : ""}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group controlId="formBasicMobile" className="col col-sm-10">
              {/* <Form.Label className='input'>Mobile Number</Form.Label> */}
              <InputGroup>
                <Form.Control placeholder='Mobile Number' onChange={e => setMobile(e.target.value)} />
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Label className='input'>Enter your Comment</Form.Label><br />
          <textarea onChange={e => setdescription(e.target.value)} />

          {/* Change onSubmit to onClick for the submit button */}
          <center><button type="button" id="button" className="me-1 btn btn btn-lg" onClick={handleSubmit}>Submit</button></center>
        </div>
      </Form>
      </center>
      </div>
      </div>
    </div>
    </>
  );
}

export default CommentsForms;