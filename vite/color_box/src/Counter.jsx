import { set } from "mongoose"
import { useState } from "react"
export default function Counter(){
    const [num,setnum]=useState(5)

    console.log(num)
    const changenum=()=>{
        setnum(num+1)
    }
    const decreasenum=()=>{
        setnum(num-1)
    }
    return(
        <div>
            <p>the count is {num}</p>
            <button onClick={changenum}>increase</button>
            <button onClick={decreasenum}>decrease</button>
        </div>
    )
}