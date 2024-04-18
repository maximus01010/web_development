import Colorlist from "./Colorlist"

export default function Shoppinglistitem({item,quantity,completed}){
    const styles={color:completed? "green":"white",TextDecoration:completed? "line-through":"none"}
    return (
        <li style={styles}>
            {item}--{quantity}</li>
    )
}
