export default function Greeter({person,from}){
    console.log(person)
    return (
        <>
            <h1>hi there,{person}</h1>
            <h2>from {from}</h2>
        </>
    )
}