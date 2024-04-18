export default function Doubledice(){
    const num1=Math.floor(Math.random()*3)+1
    const num2=Math.floor(Math.random()*3)+1
    const result=num1==num2 ? "you win :)" : "you lose :("
    const iswinner=num1===num2
    // const styles={color:num1===num2 ? "green": "red" ,fontSize:"40px"}
    const styles={color:iswinner ? "green": "red"}
    return(
        <div className="Doubledice" style={styles}>
            {/* 3methods to do the same thing  */}
            {/* <h2>{result}</h2> */}
            {/* {num1==num2 ? <h2>you win</h2> :null} */}
            {iswinner && <h2>you win</h2>}
            <p>number1={num1}</p>
            <p>number2={num2}</p>
        </div>
    )
}