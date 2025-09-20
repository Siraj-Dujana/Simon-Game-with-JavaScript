
let gameseq=[];// to track game sequence
let userseq=[];// to track user sequence
let hscore=[];//to track high score

let btnc=["crimson","purple","yellow","green"];

let h3=document.querySelector('h3');
let level=0;
let getstarted=false;

document.addEventListener('keypress',()=>{
    if(!getstarted){
        getstarted=true;
        levelup();
    }
})

//method for levelup
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*3);
    let randomColor=btnc[random];
    gameseq.push(randomColor);
    let ranbtn=document.querySelector(`.${randomColor}`);
    btnflash(ranbtn);
}



//Method for button flashing
function btnflash(btn){
    btn.classList.add("flash");    
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}


function btnpress() {
    let btn=this;
    btnflash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor)
    checkans(userseq.length-1);
}

//addEventListener for each button
let albtns=document.querySelectorAll('.btn');
for(btn of albtns){
    btn.addEventListener('click',btnpress)
}

// check either user and game sequence same or not if same then levelup if not then Game-Over
function checkans(idx) {
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(() => {
                levelup();
            }, 1000);
        }
    }
    else{
        h3.innerHTML=`Game Over! Your Score is <b>${level}</b>  Press Any Key to Start Again`;
        hscore.push(level);
        calhigh();
        reset();
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor="white";
            
        }, 1000);
    }
}

//Method for reset Game
function reset(){
    getstarted=false;
    gameseq=[];
    userseq=[];
    level=0;
}


//Method to show Highest score
function calhigh(){
    let max=0;
    for(score of hscore){
        if(score>max){
            max=score;
        }
    }
    document.querySelector('h2').innerText=`Hightest Score is:${max}`;
}