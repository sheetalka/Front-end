import React from "react";

import "./ImageFormLink.css";
const ImageFormLink = ({ onInputChange, onButtonClicked }) => {
  return (
    <div>
      <p className='f3 white tc'>
        {"Provide your Image Url below...."}
      </p>
      <div
        className=' custom pa4 br3 shadow-5 w-60'
        style={{ margin: "0 auto" }}
      >
        <input className='f4 pa2 w-70' type='text' onChange={onInputChange} />
        <button
          onClick={onButtonClicked}
          style={{ textAlign: "center" }}
          className='w-30 block grow f4 link pa2 dib white bg-black pointer'
        >
          Detect
        </button>
      </div>
     
    </div>
  );
};
export default ImageFormLink;
