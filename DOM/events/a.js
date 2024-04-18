const btn=document.querySelector('#a1');
btn.onclick=function(){
    console.log("heheh worked")
}
function scream(){
    console.log("aaahhhh")
    console.log("hmhmmmm")
}
btn.onmouseenter=scream

const button=document.querySelector('#a2');
button.addEventListener('click',function(){console.log('did it'),alert("hoooyay")})
const form=document.querySelector("#shelterform");
const input=document.querySelector("#nameinput");
const list=document.querySelector("#cats");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(input);
    console.log(input.value);
    const catname=input.value
    const newLi=document.createElement("li");
    newLi.innerText=input.value;
    console.log(newLi);
    list.append(newLi);
    input.value=""
});

input.addEventListener("change",function(e){
    console.log("hmmm")
})
