import { useState } from "react";
import "./Toggler.css"
export default function Togglecounter(){
    const [ishappy,setishappy]=useState(true)
    const toggleishappy=()=>{
        setishappy(!ishappy)
    }
    const [count,setcount]=useState(0)
    const counter=()=>{
        setcount(count+1)
    }
    return(
        <div>
            <p className="Toggler" onClick={toggleishappy}>{ishappy ?"happy":"sad"}</p>
            <p className="Toggler" onClick={counter}>count is {count}</p>
        </div>
    )
}