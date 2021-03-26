const INITIAL_STATE = { memes: []}

// const TEST_STATE = { memes: [{id: 1, src: '#', topText: "TOP", bottomText:"BOTTOM"}]}


function rootReducer(state = INITIAL_STATE, action) {
    if (action.type === "ADD_MEME") {
      return {...state,
        memes: [...state.memes, { ...action.meme }]};
    }
    if (action.type === "REMOVE_MEME") {
      return {...state,
        memes: state.memes.filter(meme => meme.id !== action.id)};
    }
    return state;
  }
  
export default rootReducer;