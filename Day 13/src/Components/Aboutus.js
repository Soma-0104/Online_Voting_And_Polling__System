import React from "react";
import '../Styles/about.css';
import { Link } from "react-router-dom";
import about from '../Assets/about.jpg';
import ab1 from '../Assets/con.jpeg'
export default function AboutUs(){
    return(
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
        <section class="section_all bg-light" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title_all text-center">
                            <h3 class="font-weight-bold">
Welcome to our <span class="text-custom">online voting website !</span></h3>
                            <p class="section_subtitle mx-auto text-muted">we believe in empowering our students to actively participate in the democratic process. 
                            <br/>Our online voting platform provides an efficient and secure way for students to cast their votes and make their voices heard.</p>
                            <div class="">
                                <i class=""></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row vertical_content_manage mt-5">
                    <div class="col-lg-6">
                        <div class="about_header_main mt-3">
                            <div class="about_icon_box">
                                <p class="text_custom font-weight-bold">Empowering students with the power to vote online, paving the way for a more connected and inclusive campus community.</p>
                            </div>
                            <h4 class="about_heading text-capitalize font-weight-bold mt-4">With user-friendly features and robust security measures, we ensure a seamless voting experience for all our students. 
                            Our platform enables you to cast your votes from anywhere, at any time, making it convenient and accessible to everyone.</h4>
                            <p class="text-muted mt-3">Transparency and fairness are at the core of our values. We guarantee the integrity of the voting process and maintain strict 
                            confidentiality of all ballots cast. Rest assured that your vote matters and will be counted accurately.</p>

                            <p class="text-muted mt-3"> We strive to promote student engagement, democratic values, and responsible citizenship through our online voting platform. 
                            Together, let's shape the future of our college and create a vibrant and inclusive community.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img_about mt-3">
                            <img src={about} style={{height:"400px"}} alt="" class="img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">

                                    <i class="fas fa-pencil-alt"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Creative Design</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fab fa-angellist"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">We make Best Result</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fas fa-paper-plane"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">best platform </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}