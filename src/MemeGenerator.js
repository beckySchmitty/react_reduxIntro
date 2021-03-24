import React from "react";
import Meme from "./Meme"
import NewMemeForm from "./NewMemeForm"

import { useSelector, useDispatch } from 'react-redux';

const MemeGenerator = () => {
    const dispatch = useDispatch();

    let src = useSelector(store => store.src)
    let topText = useSelector(store => store.topText)
    let bottomText = useSelector(store => store.bottomText)

    function addMeme(newMeme) {
        dispatch({type: 'addMeme', payload: {src: newMeme.src, topText: newMeme.topText, bottomText: newMeme.bottomText}})
    }


    return (
        <div>
            <h1>Meme Generator</h1>
            <NewMemeForm addMeme={addMeme} />
            <h3>Here's your meme:</h3>
            <Meme src={src} topText={topText} bottomText={bottomText} />

        </div>
    )

}

export default MemeGenerator;