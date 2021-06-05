import React from 'react'
import './css/team.css'
import Header from './LOGGEDINHEADER'
import Dashboard from './Dashboard'
import chiku from './chiku.jpg'
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
              <a href="#"><i className="fas fa-envelope-open" /></a>
            </span>
            <h4>Chaitanya Galande</h4>
            <span>Front End ReactJs Developer</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 single-item">
        <div className="item">
          <div className="thumb">
            <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
            <div className="overlay">
              <h4>Saumitra Deshmukh</h4>
              <p>
SRS & DATABASE ENGINEER              </p>
              <div className="social">
                
              </div>
            </div>
          </div>
          <div className="info">
            <span className="message">
              <a href="#"><i className="fas fa-envelope-open" /></a>
            </span>
            <h4>Saumitra Deshmukh</h4>
            <span>SRS & DATABASE ENGINEER</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 single-item">
        <div className="item">
          <div className="thumb">
            <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
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
              <a href="#"><i className="fas fa-envelope-open" /></a>
            </span>
            <h4>Pranay Goyal</h4>
            <span>Backend Developer</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 single-item">
        <div className="item">
          <div className="thumb">
            <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
            <div className="overlay">
              <h4>Sahil Sharma</h4>
              <p>
Backend Deveoper              </p>
              <div className="social">
               
              </div>
            </div>
          </div>
          <div className="info">
            <span className="message">
              <a href="#"><i className="fas fa-envelope-open" /></a>
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
