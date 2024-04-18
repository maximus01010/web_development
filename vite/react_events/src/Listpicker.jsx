export default function Listpicker({values}){
    const randomindex=Math.floor(Math.random()*values.length)
    const randelement=values[randomindex]
    return(
        <div>
            <p>the list of:{values}</p>
            <p>random value from list:{randelement}</p>
        </div>
    )
}