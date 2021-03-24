const INITIAL_STATE = { src: '#', topText: "top", bottomText: "bottom"};

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case 'addMeme':
            return {...state, src: action.payload.src, topText: action.payload.topText, bottomText: action.payload.bottomText}
        case 'reset':
            return {...state, state: INITIAL_STATE}
    }
}

export default rootReducer;