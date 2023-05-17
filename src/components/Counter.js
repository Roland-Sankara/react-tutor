import {useState} from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

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
            <h1>Counter</h1>
            <Header>
                <Link to="/">Home</Link>
                <Link to="/counter">Counter</Link>
            </Header>

            <p>Here is a counter</p>
            <h1>{count}</h1>
            <div className="btns">
                <button onClick={increaseCount}>Increase +</button>
                <button onClick={decreaseCount}>Decrease -</button>
            </div>
        </div>
    )
}