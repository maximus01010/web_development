//setting initial state
import { useState } from "react";
function generategameboard(){
    console.log('making game board')
    return Array(5000)
}
export default function Dumbo(){
    const [board,setboard]=useState(generategameboard)
    return(
        <button onClick={()=>setboard('hello')}>click to change</button>
    )
}