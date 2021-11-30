import React from "react";

const Keyword = ()=>{
    return(
        <div>
            <p><span>Thoughts</span> to be thought about</p>
            <div className="thinkkeywordpage">
            <h1>What is the meaning of life ?</h1>
                <form>
                    
                    <input type="text" placeholder="Write down the first 3" />
                    <br />
                    <input type="text" placeholder="words that comes to" />
                    <br />
                    <input type="text" placeholder="your mind" />
                    <br />
                    <button type="submit">Start Thinking</button>
                    <br />
                </form>
            </div>
        </div>
    )
}

export default Keyword;