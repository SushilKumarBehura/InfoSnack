import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
      <Router>
        <Particle params={particlesConfig} className="App-particles__container" />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="thinkkeywords" element={<ThinkKeywords />} />
          <Route path="ShowKeywordsDuringEight" element={<ShowKeywordsDuringEight />} />
          <Route path="writeopinion" element={<WriteOpinion />} />
          <Route path="ViewAllPost" element={<ViewAllPost />} />
          <Route path="notification" element={<Notification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
