import React,{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Servicecheck from '../src/pages/Servicecheck';
import Navibar from './components/Nav';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Footer from "./components/Footer";
import ScheduleService from "./pages/ScheduleService";
import Service from "./pages/Services"
import Logout from "./pages/Logout"

function App(props) {
  const [currentUser, setCurrentUser]= useState(null)

  const getCombackUserData = async () => {
    const response = await fetch("https://127.0.0.1:5000/getinfo", {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
    const data = await response.json()
    setCurrentUser(data.email)
  }

  useEffect(() => {
    getCombackUserData()
  }, [])

  return (
    <div className="App">
      <Navibar {...props} currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" render={() => <Home {...props} />} />
        <Route path="/login" render={() => <Login {...props} setCurrentUser={setCurrentUser} currentUser={currentUser}/> }/>
        <Route path="/register" render={() => <Register {...props} setCurrentUser={setCurrentUser}/>} />
        <Route path="/servicecheck" render={() => <Servicecheck {...props} currentUser={currentUser}/>} />
        <Route path="/dashboard" render={() => <Dashboard {...props} currentUser={currentUser}/>} />
        <Route path="/schedule-service" render={() => <ScheduleService {...props}/>} />
        <Route path="/services" render={() => <Service {...props}/>} />
        <Route path="/logout" render={() => <Logout setCurrentUser={setCurrentUser}/>} />

      </Switch>
      <Footer {...props}/>
    </div>
  );
}

export default withRouter(App);
