import React, { useState } from 'react'

const LearnUseState1 = () => {
  let [name,setName] = useState("shinai");
  return (
    <div>
      <p>name is {name}</p>
      <button onClick={() => {
        setName("Joawtakla")
      }}> Change Name </button>
    </div>
  );
};

export default LearnUseState1
