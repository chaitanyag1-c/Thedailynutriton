import React from 'react'
import './css/contact.css'
import Header from './LOGGEDINHEADER'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './Dashboard'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
      
        emailjs.sendForm('service_8o11so6', 'template_60f3jq9', e.target, 'user_L5WbOZGv8Ai94tr8CIHVj')
          .then((result) => {
              console.log(result.text);
            
            toast.success('🦄 We`ve sent an mail to your provided email address', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }
   
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
        Contact Us
      </div>
      <div className="col-lg-12 login-form">
        <div className="col-lg-12 login-form">
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label className="form-control-label">E-mail</label>
              <input type="email" name="email" className="form-control" />
            </div>
            
            <div className="col-lg-12 loginbttm">
              <div className="col-lg-6 login-btm login-text">
                {/* Error Message */}
              </div>
              <div className="col-lg-6 login-btm login-button">
                <button type="submit" className="btn btn-danger">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-3 col-md-2" />
    </div>
  </div>
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
</div>

        </>
    )
}

export default Contact
