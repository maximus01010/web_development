let doc=document.getElementsByTagName("IMG")
for(let i of doc){
    console.log(i.src)
}
let doc2=document.getElementsByClassName("square")
for(let i of doc2){
    i.src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
}
