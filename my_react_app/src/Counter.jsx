import React, {useState,useEffect} from 'react';

function Counter(){

const [count, setCount] = useState(0);
const increment = () => {
    setCount(count+1);
}
const decrement = () => {
    setCount(count-1);
}
const reset = () => {
    setCount(0);
}
useEffect(()=>{
        document.title = `Count: ${count}`;
    });
return(
    <div className="container">
        <h2 className="Count">{count}</h2>
        <button onClick={increment} className="Ib">+</button>
        <button onClick={reset} className="Rb">reset</button>
        <button onClick={decrement} className="Db">-</button>
    </div>
);
}

export default Counter