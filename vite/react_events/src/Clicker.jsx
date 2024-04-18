function handleclick(){
    console.log("clicked the button")
}
export default function Clicker(){
    return(
        <div>
            <p>click here</p>
            <button onClick={handleclick}>click</button>
        </div>
    )
}