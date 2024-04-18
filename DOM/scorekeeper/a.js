const p1button=document.querySelector("#p1button")
const p2button=document.querySelector("#p2button")
const p1display=document.querySelector("#p1display")
const p2display=document.querySelector("#p2display")
const resetbutton=document.querySelector("#reset")
const winningscoreselect=document.querySelector("#playto")

let p1score=0;
let p2score=0;
let winningscore=5;
let isgameover=false;
p1button.addEventListener("click",function(){
    if(!isgameover){
        p1score++;
        if(p1score===winningscore){
            isgameover=true;
            p1display.classList.add("winner");
            p2display.classList.add("loser");
        }
        p1display.textContent=p1score;
    }
})
p2button.addEventListener("click",function(){
    if(!isgameover){
        p2score++;
        if(p2score===winningscore){
            isgameover=true;
            p2display.classList.add("winner");
            p1display.classList.add("loser");
        }
        p2display.textContent=p2score;
    }
})
winningscoreselect.addEventListener("change",function(){
    //alert(this.value);
    winningscore=parseInt(this.value);
    reset();
})
resetbutton.addEventListener("click",reset)
//we are creating a function reset bcoz it would be helpful for both reset button and the winingscoreselect.
function reset(){
    isgameover=false;
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove("winner",'loser');
    p2display.classList.remove("winner",'loser');
}