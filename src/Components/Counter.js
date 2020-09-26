import React, { useState } from 'react';

function NumberCounter(){
    let [count, setCount] = useState(0);

    return(
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => setCount(count + 1)}>
                Plus
            </button>
            <button onClick={() => setCount(count - 1)}>
                Minus
            </button>
            <button onClick={() => setCount(0)}>
                CE
            </button>
        </div>
    )
}

export default NumberCounter;