import React from "react";
import Meme from "./Meme"
import NewMemeForm from "./NewMemeForm"

import { useSelector, useDispatch } from "react-redux";

function App() {
  const memes = useSelector(state => state.memes);
  const dispatch = useDispatch();

  function addMeme(newMeme) {
      dispatch({type: 'ADD_MEME', meme: newMeme})
  }

  function deleteMeme(id) {
      dispatch({type: "REMOVE_MEME", id });
    }
  
  const allMemes = memes.map(m => (
      <Meme
        key={m.id}
        topText={m.topText}
        bottomText={m.bottomText}
        src={m.src}
        deleteMeme={() => deleteMeme(m.id)}
      />
    ));


  return (
      <div className="App-cont">
          <h1>Meme Generator</h1>
          <NewMemeForm addMeme={addMeme} />
          <h3>Here's your meme:</h3>
          {allMemes}
      </div>
  )
}

export default App;
