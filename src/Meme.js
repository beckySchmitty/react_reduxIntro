import React from "react"
import "./Meme.css";


const Meme = ({src, topText, bottomText}) => {

    return (
        <div id="main-div" className="Meme">
          <div className="container">
            <span className="top-text">{topText}</span>
            <img src={src} alt="meme" />
            <span className="bottom-text">{bottomText}</span>
          </div>
        </div>
      );
}

export default Meme;