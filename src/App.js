
import './App.css';
import React from 'react';
import "./Components/Navbar/navbar.css";
import Layout from "./Components/Layout.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/animate.css/animate.min.css";
import Courses from './Components/Courses/Courses';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to='/EducationX' />
          </Route>
          <Route exact path="/EducationX" component={Layout} />
          <Route exact path="/courses" component={Courses} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
