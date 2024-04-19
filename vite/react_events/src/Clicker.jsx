function handleclick(){
    console.log("clicked the button")
}
function handlehover(){
    console.log("hover")
}
export default function Clicker({message,buttontext}){
    return(
        <div>
            <p onMouseOver={handlehover}>click here</p>
            <button onClick={handleclick}>click</button>
            <button onClick={()=>alert(message)}>{buttontext}</button>
        </div>
    )
}