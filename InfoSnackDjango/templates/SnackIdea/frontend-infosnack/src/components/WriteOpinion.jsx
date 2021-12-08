import React from "react";
// import './css/home.css';

const WriteOpinion = () => {
  return (
    <div>
      <div className="writeopinion">
        <h1>What is the meaning of life ? </h1>
        <textarea rows="15" cols="38" name="comment" form="usrform" placeholder="Your answer here...">
          
        </textarea>
        <button type="submit">Share your opinion</button>
        <p>ThinkOneDay</p>
      </div>
    </div>
  );
};

export default WriteOpinion;
