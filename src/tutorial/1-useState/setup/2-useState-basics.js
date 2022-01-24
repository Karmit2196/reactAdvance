import React, { useState } from 'react';

const UseStateBasics = () => {
  const[text,setText]=useState("hello");

  const handleClick=()=>{
    if(text=="hello"){
      setText("good bye")
    }
    else{
      setText("hello");
    }
  }
     return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
