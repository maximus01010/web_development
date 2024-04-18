let input=prompt("enter text").toLowerCase()
let todo=['das','asdfasdasf'];
while(input!=='quit'){
    if (input=='list'){
        for(let i=0;i<todo.length;i++){
            console.log(`${i}: ${todo[i]}`)
        }
    }
    if(input=='add'){
        input=prompt('enter the task')
        todo.push(input)
    }
    if(input=='delete'){
        input=prompt("enter the index")
        todo.splice(input,1)
    }
    input=prompt("enter text").toLowerCase()
}
console.log("you exited")