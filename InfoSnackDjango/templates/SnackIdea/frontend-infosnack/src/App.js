import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Particle from "react-tsparticles";

import './App.css';
import particlesConfig from "./components/assets/particlesConfig.json";

import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ThinkKeywords from './components/ThinkKeywords';
import ShowKeywordsDuringEight from './components/ShowKeywordsDuringEight';
import WriteOpinion from './components/WriteOpinion';
import ViewAllPost from './components/ViewAllPost';
import Notification from './components/Notification';

function App() {
  return (
    <>
      <Particle params={particlesConfig} className="App-particles__container" />
      <Home />
      {/* <Router> */}
        {/* <Routes>
          <Route exact path="" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/thinkkeywords" component={ThinkKeywords} />
          <Route exact path="/ShowKeywordsDuringEight" component={ShowKeywordsDuringEight} />
          <Route exact path="/writeopinion" component={WriteOpinion} />
          <Route exact path="/ViewAllPost" component={ViewAllPost} />
          <Route exact path="/notification" component={Notification} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
