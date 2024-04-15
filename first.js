let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");
const msg = document.querySelector("#msg");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    let randid = Math.floor(Math.random()*3);
    return options[randid];
}

const drawgame= (userChoice)=>{
    msg.innerText=`Game was draw. You both choose ${userChoice}.`;
    msg.style.backgroundColor = "rgb(0, 0, 0)";  
}

const showwinner = (userwin, userChoice, compChoice)=>{
    if (userwin){
        userscore++;
        user.innerText = userscore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        
    }else{
        compscore++;
        comp.innerText=compscore;
        msg.innerText = `You lose!!! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }  
}


const playgame= (userChoice)=>{
    console.log("UserChoice:", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice", compChoice);

    if (userChoice===compChoice){
        drawgame(userChoice); 
    }else{
        let userwin= true;
        if(userChoice==="rock"){
            userwin = compChoice==="paper"? false : true;
        }else if (userChoice==="paper"){
            userwin = compChoice==="scissors"? false : true;
        }else if(userChoice==="scissors"){
            userwin = compChoice==="rock"? false : true;
        }
        showwinner(userwin, userChoice , compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
    
})