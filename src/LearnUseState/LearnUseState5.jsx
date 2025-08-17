import React, { useState } from 'react'

const LearnUseState5 = () => {
  let [show, setShow] = useState(false);

  return (
    <div>
      {show === true ? (
        <img src="./hareKrishna.png" alt="" width="500px" />
      ) : null}
      
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Image " : "Show Image"}
      </button>
    </div>
  )
}

export default LearnUseState5
