let buttons=document.querySelectorAll(".box")
let reset=document.querySelectorAll("#reset")
let winner=document.querySelector(".winner")
// console.log(winner)

let win_patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



let turnPlayer1=true
buttons.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnPlayer1){
            box.innerText="X"
            turnPlayer1=false
            // win()
        }else{
            box.innerText="O"
            turnPlayer1=true
            // win()
        }
        box.disabled=true
        win()
    })
})


function win(){
    for(let pattern of win_patterns){
        let entry1=buttons[pattern[0]].innerText
        let entry2=buttons[pattern[1]].innerText
        let entry3=buttons[pattern[2]].innerText
        if((entry1=="X" && entry2=="X" && entry3=="X") || (entry1=="O" && entry2=="O" && entry3=="O")){
            displayWinner()
            escape_seq()
        }
        
    }
}

function escape_seq(){
    for(let button of buttons){
        button.disabled=true
    }
}

function displayWinner(){
    if(turnPlayer1){
        console.log("O wins")
        winner.innerText="O wins"
        winner.classList.remove("hide")
    }else{
        console.log("X wins")
        winner.innerText="X wins"
        winner.classList.remove("hide")
    }
}