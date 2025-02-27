let buttons=document.querySelectorAll(".box")
let reset=document.querySelectorAll("#reset")

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
        
    })
})


function win(){
    console.log("inside win");
    for(let pattern of win_patterns){
        // console.log(buttons[pattern[0]], buttons[pattern[1]], buttons[pattern[2]])
        let entry1=buttons[pattern[0]].innerText
        let entry2=buttons[pattern[1]].innerText
        let entry3=buttons[pattern[2]].innerText
        if((entry1=="X" && entry2=="X" && entry3=="X") || (entry1=="O" && entry2=="O" && entry3=="O")){
            console.log("Game Over")
            return true
        }
        return false
    }
}
