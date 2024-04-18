export default function Die({numsides}){
    const roll=Math.floor(Math.random()*numsides)+1
    return <p>{numsides}-sided die roll:{roll}</p>
}