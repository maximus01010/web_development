import Colorbox from "./Colorbox";
import "./Colorboxgrid.css"
export default function Colorboxgrid({colors}){
    const boxes=[]
    for (let i=0;i<25;i++){
        boxes.push(<Colorbox colors={colors}/>)
    }
    console.log(boxes)
    return <div className="Colorboxgrid">{boxes}</div>
}