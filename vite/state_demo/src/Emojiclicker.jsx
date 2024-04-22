import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
export default function Emojiclicker(){
    const [emojis,setemojis]=useState([{id:uuidv4(),emoji:':)'}])
    const addemoji=()=>{
        setemojis(oldemojis=>[...oldemojis,{id:uuidv4(),emoji:':('}])
    }
    const deleteemoji=(id)=>{
        console.log(id)
        
        setemojis(previousemoji=>{
            return previousemoji.filter(e => e.id !==id)
        })
    }
    return(
        <div>
            {emojis.map((e)=>(<span onClick={()=>deleteemoji(e.id)} key={e.id} style={{fontSize:'4rem'}}>{e.emoji}</span>))}
            <button onClick={addemoji}>add emoji</button>
        </div>
    )
}