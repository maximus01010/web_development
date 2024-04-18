export default function Colorlist({colors}){
    const lis=colors.map(colors=><li>{colors}</li>)
    return(
        <div>
            <p>color list</p>
            <p>{colors}</p>
            <ul>
            {lis}
            </ul>
            <ul>
            {colors.map((c)=>
                <li style={{color:c}}>{c}</li>)}
            </ul>
        </div>
    )
}