import React, { useState } from 'react'

const HandleButtonClick = () => {
  const [message, setMessage] = useState("Click a button")

  const handleButton1 = () => {
    setMessage("Button 1 is clicked")
  }

  const handleButton2 = () => {
    setMessage("Button 2 is clicked")
  }

  const handleButton3 = (a, b, c) => {
    setMessage(`Button 3 is clicked with values: ${a}`)
  }

  return (
    <div>
      <button onClick={handleButton1}>Button 1</button>
      <button onClick={handleButton2}>Button 2</button>
      <button onClick={() => handleButton3(3)}>Button 3</button>

      {/* This will display the message on screen */}
      <p>{message}</p>
    </div>
  )
}

export default HandleButtonClick
