import { useState } from "react";
export default function Counter(){
    const [count,setcount]=useState(0)
    const increament=()=>{
        setcount(count+1)
    }
    const add3=()=>{
        setcount((currentcount)=>currentcount+1)
        setcount((currentcount)=>currentcount+1)
        setcount((currentcount)=>currentcount+1)
    }
    return (
        <div>
            <p>count:{count}</p>
            <button onClick={increament}>add 1</button>
            <button onClick={add3}>add 3</button>
        </div>
    )
}