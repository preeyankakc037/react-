import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [count, setCount] = useState(1);
    return (

        <div>
            <p>count is {count}</p>
            <button onClick={() => {
                setCount(count + 2)
            }}> Increment </button>

            <button onClick={() => {
                setCount(count - 2)
            }}> Decrement </button>



        </div>


    );
};

export default LearnUseState2
