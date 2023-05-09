import {useState} from "react";

export default function Counter(){
    let [count, setCount] = useState(0);

    function increaseCount(){
        setCount(count + 1)
    }

    function decreaseCount(){
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <div className="btns">
                <button onClick={increaseCount}>Increase +</button>
                <button onClick={decreaseCount}>Decrease -</button>
            </div>
        </div>
    )
}