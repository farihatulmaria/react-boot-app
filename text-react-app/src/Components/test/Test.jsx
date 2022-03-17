import React, { useState } from 'react';
const classNames = {
    class1:'btn',
    clss2: 'bg-primary',
    class3: 'text-white',
    class4: 'fw-bold'
}
const Test = () => {
    const [count, setCount] = useState(0)

    const plus = () => {
        if(count < 0){
            setCount(0)
        }else{ 
            setCount(count+1)
        }
    };
    const minus = () => setCount(count-1);
    return (
        <div>
            <div className="number">
                <h1>Count: {count}</h1>
                <button className={classNames} onClick={plus}>+</button>
                <button className='ms-3
                p-3' onClick={minus}>-</button>
            </div>
        </div>
    );
};

export default Test;