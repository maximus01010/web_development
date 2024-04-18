//axios.get("https://swapi.dev/api/people/1/")
//.then((res)=>{
//    console.log("response",res)
//})
//.catch((e)=>console.log("error"))


const getstarwar= async (id)=>{
    try{
        const res=await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data)
    }
    catch (e){
        console.log("error",e)
    }
}
getstarwar(2)

const datdjoke=async ()=>{
    const res1=await axios.get("https://icanhazdadjoke.com/slack");
    console.log(res1)
}