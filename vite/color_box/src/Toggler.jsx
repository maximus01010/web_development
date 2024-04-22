import { useState } from "react";
import "./Toggler.css"
export default function Toggler(){
    const [ishappy,setishappy]=useState(true)
    const toggleishappy=()=>{
        setishappy(!ishappy)

    }
    return(
        <p className="Toggler" onClick={toggleishappy}>{ishappy ?"happy":"sad"}</p>
    )
}