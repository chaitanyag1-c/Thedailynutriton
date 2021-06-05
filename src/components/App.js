import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Hero from './Hero'
import team from './Ourteam'
import select from './Select'
import Banner from './Banner'
import '../slider.css'
import Checkout from './Checkout'
import contact from './Contact'
function App() {
  return (
    
  
    
      <>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Hero} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/ourteam" component={team} />
              <Route path="/Select" component={select} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/contact" component={contact} />
              <Route path="/banner" component={Banner} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
    
      </>

    
  )
}

export default App
