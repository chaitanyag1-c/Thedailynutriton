import React from 'react'
import './css/team.css'
import Header from './LOGGEDINHEADER'
import Dashboard from './Dashboard'
import chiku from './chiku.jpg'
import sahil from './sahil.jpg'
import goel from './goel.jpg'
import som from './som.jpg'

import Footer from './Footer'

const Ourteam = () => {
    return (
      <>
<Dashboard />
        <div id="team-cont">
        <Header />
         <section id="team" className="team-area">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="site-heading text-center">
          <h2>Our <span>Team</span></h2>
          <h4>Meet our awesome and expert team members</h4>
        </div>
      </div>
    </div>
    <div className="row team-items">
      <div className="col-md-4 single-item">
        <div className="item">
          <div className="thumb">
            <img className="img-fluid" src={chiku} alt="Thumb" />
            <div className="overlay">
              <h4>Chaitanya Galande</h4>
              <p>
Front End ReactJs Developer
              </p>
              <div className="social">
                
              </div>
            </div>
          </div>
          <div className="info">
            <span className="message">
              <a href="https://www.linkedin.com/in/chaitanya-galande-96a491134/" target="_blank"><i className="fas fa-envelope-open" /></a>
            </span>
            <h4>Chaitanya Galande</h4>
            <span>Front End ReactJs Developer</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 single-item">
        <div className="item">
          <div className="thumb">
            <img className="img-fluid" src={som} alt="Thumb" />
            <div className="overlay">
              <h4>Saumitra Deshmukh</h4>
              <p>
SRS & FRONTEND ENGINEER              </p>
              <div className="social">
                
              </div>
            </div>
          </div>
          <div className="info">
            <span className="message">
              <a href="https://www.linkedin.com/in/saumitra-deshmukh-b491a0204/" target="_blank"><i className="fas fa-envelope-open" /></a>
            </span>
            <h4>Saumitra Deshmukh</h4>
            <span>SRS & FRONTEND ENGINEER</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 single-item">
        <div className="item">
          <div className="thumb">
            <img className="img-fluid" src={goel} alt="Thumb" />
            <div className="overlay">
              <h4>Pranay Goyal</h4>
              <p>
Backend Developer              </p>
              <div className="social">
                
              </div>
            </div>
          </div>
          <div className="info">
            <span className="message">
              <a href="https://www.linkedin.com/in/pranay-goyal-434a9b1b4/" target="_blank"><i className="fas fa-envelope-open" /></a>
            </span>
            <h4>Pranay Goyal</h4>
            <span>Backend Developer</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 single-item">
        <div className="item">
          <div className="thumb">
            <img className="img-fluid" src={sahil} alt="Thumb" />
            <div className="overlay">
              <h4>Sahil Sharma</h4>
              <p>
Backend Developer              </p>
              <div className="social">
               
              </div>
            </div>
          </div>
          <div className="info">
            <span className="message">
              <a href="https://www.linkedin.com/in/sahil-sharma-281303160/" target="_blank"><i className="fas fa-envelope-open" /></a>
            </span>
            <h4>Sahil Sharma</h4>
            <span>Web designer SRS ENGINEER</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
        </div>
        <Footer />
        </>
    )
}

export default Ourteam
