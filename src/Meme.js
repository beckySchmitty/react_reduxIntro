import React from "react"
import "./Meme.css";


const Meme = ({id, src, topText, bottomText, deleteMeme}) => {

    return (
        <div id="main-div" className="Meme">
          <div className="container">
            <span className="top-text">{topText}</span>
            <img src={src} alt="meme" />
            <span className="bottom-text">{bottomText}</span>
          </div>
          <button onClick={() => deleteMeme(id)}>X</button>
        </div>
      );
}

export default Meme;