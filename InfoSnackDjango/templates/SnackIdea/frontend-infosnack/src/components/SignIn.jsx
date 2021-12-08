import React from "react";
import './css/authentication.css';


const SignIn = () => {
  return (
    <div>
      <div className="signinform">
        <form>
          <h1>Think One Day</h1>
          <input type="text" placeholder="User Name" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button type="submit">LOGIN</button>
          <br />
          <p>
            New around here?
            <a href="https://infosnack.at/accounts/login"> Sign up</a>
          </p>
          <text>
            With ThinkOne we collectively reflect on one question a Day
          </text>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
