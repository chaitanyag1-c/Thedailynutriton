import React from 'react'
import './css/select.css'
import Header from './LOGGEDINHEADER'
import Dashboard from './Dashboard'
const Select = () => {
    return (
        <div id="login-cont">
        <Dashboard />
        <Header />
        <div className="sheading" >
        <h2 className="align-text1">Select Meal According to your need</h2>
        </div>



       

            <div className="wrapper1 container d-flex">

  <div className="card1 "><img src="https://images.unsplash.com/photo-1591089627083-d9d049d833f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"  />
    <div className="info">
      <h1>Bulk</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <a href="https://thedailynutriton.herokuapp.com/">Select</a>
    </div>
  </div>
  <div className="card1 "><img src="https://static.toiimg.com/photo/msid-74797355/74797355.jpg?143580" />
    <div className="info">
      <h1>Fatloss</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <a href="https://thedailynutriton.herokuapp.com/">Select</a>
    </div>
  </div>
  <div className="card1 "><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <div className="info">
      <h1>Regular</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <a href="https://thedailynutriton.herokuapp.com/">Select</a>
    </div>
  </div>

  </div>



        </div>
    )
}

export default Select
