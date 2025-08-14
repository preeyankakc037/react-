import React, { useState } from 'react'

const LearnUseState4 = () => {
  let [show,setShow] = useState(true);
  return (
    <div>
        {show ? <h1> Hello</h1>: null}

        <button
            onClick={() => {
                setShow(true);
            }}>
                Show
        </button>

        <button onClick={() => {
                setShow(false);
            }}>Hide</button>
    </div>
)}

export default LearnUseState4
