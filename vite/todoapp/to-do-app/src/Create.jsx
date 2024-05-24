import React from "react";
import axios from "axios";
import { useState } from "react";
export default function Create(){
    const [task,settask]=useState()
    const handleAdd=()=>{
        axios.post('http://localhost:3001/add',{task:task})

        .then(result=>{
            location.reload()})
        .catch(err=>console.log(err))
    }
    return (
        <div className="create_form">
            <input type="text" placeholder="Enter task" onChange={(e)=>settask(e.target.value)} id="" />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}