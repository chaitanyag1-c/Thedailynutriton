import React from 'react'
import './css/contact.css'
import Header from './LOGGEDINHEADER'
import Dashboard from './Dashboard'
import error from './404.jpg'
import {Link} from 'react-router-dom'
const Error = () => {
    
   
    return (
        <>
        <Dashboard />
        <Header />
            <div id="login-cont">
  <div className="row">
    <div className="col-lg-3 col-md-2" />
    <div className="col-lg-6 col-md-8 login-box1">
      <div className="col-lg-12 login-key">
        <i className="fa fa-key" aria-hidden="true" />
      </div>
      <div className="col-lg-12 login-title">
        404 Error not Found
      </div>
      <div className="col-lg-12 login-form">
        <div className="col-lg-12 login-form">
          
          
          <img src={error} alt="404"/>
            
            <div className="col-lg-12 loginbttm">
              <div className="col-lg-6 login-btm login-text">
                {/* Error Message */}
              </div>
              <div className="col-lg-6 login-btm login-button">
                <Link to="/" className="btn btn-danger">Home</Link>
              </div>
            </div>
          
        </div>
      </div>
      <div className="col-lg-3 col-md-2" />
    </div>
  </div>
 
</div>

        </>
    )
}

export default Error
