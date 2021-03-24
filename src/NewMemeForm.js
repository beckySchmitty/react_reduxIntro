import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_FORM = {
  src: "",
  topText: "",
  bottomText: ""
};


const NewMemeForm = ({addMeme}) => {

    const [form, setForm] = useState(DEFAULT_FORM);

    function handleSubmit(e) {
      e.preventDefault();
      addMeme({ ...form, id: uuidv4() });
      setForm(DEFAULT_FORM);
    }
  
    function handleChange(e) {
      const { name, value } = e.target;
      setForm(f => ({ ...f, [name]: value }));
    }
  
    return (
      <div>
        <h2>Make A Meme!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="src">Image URL</label>
          <input
            type="text"
            name="src"
            id="form_src"
            onChange={handleChange}
            value={form.src}
          />
          <label htmlFor="topText">Top Text</label>
          <input
            type="text"
            name="topText"
            id="form_topText"
            onChange={handleChange}
            value={form.topText}
          />
          <label htmlFor="bottomText">Bottom Text</label>
          <input
            type="text"
            name="bottomText"
            id="form_bottomText"
            onChange={handleChange}
            value={form.bottomText}
          />
          <button type="submit" id="form_submit">
            Generate!
          </button>
        </form>
      </div>
    );
}

export default NewMemeForm;