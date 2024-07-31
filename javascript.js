let you = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#you");
const compscorepara = document.querySelector("#comp");


const gencomputerchoice = () => {
    const options = ["rock" ,"paper", "scissors" ];
  const randomindex= Math.floor(Math.random()*3);
  return options[randomindex];
}
  
const drawgame = () =>{
    console.log("game was draw");
    msg.innerText= "Game was draw play again";
    msg.style.backgroundColor = "#081b31";
}
 
const showWinner = (userwin , userchoice, computerchoice)=>{
    if(userwin){
       you++;
        userscorepara.innerText = you;
 
        msg.innerText = `You win!   yours ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comp++;
        compscorepara.innerText = comp;
        msg.innerText = `You loss! computer ${computerchoice} beats yours ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playgame = (userchoice) =>{
    console.log("user choice = ", userchoice);
    //generate computer choice -> modular
const computerchoice = gencomputerchoice();
console.log(" comp choice =",computerchoice );

if(userchoice==computerchoice){
drawgame();
}
else{
    let userwin = true;
    if(userchoice=="rock"){
        userwin = computerchoice === "paper"? false : true;
    }
    else if(userchoice === "paper"){
        //rock scissors
 userwin = computerchoice === "scissors"? false : true;
    } else{
        userwin = computerchoice === "rock"? false : true;
    }
 showWinner(userwin , userchoice,computerchoice);
}
};



choices.forEach((choice) =>{
 
    choice.addEventListener("click",() => {
        const userchoice= choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
