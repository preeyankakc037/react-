import React from 'react'

const ButtonClick = () => {
    return (
        <div>
            <button
                onClick={() => {
                    console.log("button is clicked")
                }
                }
            >
                Click me </button>
        </div>
    )
}

export default ButtonClick
