import Shoppinglistitem from "./Shoppinglistitem"
export default function Shopping_list({items}){
    return (
        <ul>
            {items.map((i)=>(
                <Shoppinglistitem 
                // key={i.id}
                // item={i.item}
                // quantity={i.quantity}
                // completed={i.completed}
                key={i.id}{...i}
                />
            ))}
        </ul>
    )
}