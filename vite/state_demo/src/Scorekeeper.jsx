import { useState } from "react"
export default function Scorekeeper(){
    const [score,setscore]=useState({p1score:0,p2score:0})
    const increasep1=()=>{
        //const newscore={...score,p1score:score.p1score+1}
        setscore(oldscore=>{
            return {...oldscore,p1score:oldscore.p1score+1}
        })
    }
    const increasep2=()=>{
        //const newscore={...score,p2score:score.p2score+1}
        setscore(oldscore=>{
            return {...oldscore,p2score:oldscore.p2score+1}
        })
    }
    return(
    <div>               
        <p>player1:{score.p1score}</p>
        <p>player2:{score.p2score}</p>
        <button onClick={increasep1}>+1 player1</button>
        <button onClick={increasep2}>+1 player2</button>

    </div>
    )
}