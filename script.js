let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgbox = document.querySelector(".msg-box");

let turnO= true;

const winPatterns = [[ 0, 1, 2], 
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];

const resetgame = () => {
    turnO= true;
    enablebtn();
    msgbox.classList.add("hide");
};

// console.log(boxes);
for (let box of boxes) {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
}
 



const showWinner = (winner) => {
    msg.innerText =  `winner winner ${winner}`;
    msgbox.classList.remove("hide");
    disablebtn();
};



const disablebtn = () =>
{
for(let box of boxes)  {
    box.disabled = true;
}
};

const enablebtn = () =>
{
for(let box of boxes)  {
    box.disabled = false;
box.innerText ="";

}
};

const drawgame = () => {
    msg.innerText = "Game is a draw. Play Again!";
    msgbox.classList.remove("hide");
    disablebtn();
};




const checkWinner = () => {
    let draw= true;
    for (let pattern of winPatterns) {
        let  posval1 = boxes[pattern[0]].innerText;
        let  posval2 = boxes[pattern[1]].innerText;
        let  posval3 = boxes[pattern[2]].innerText;
        
        if(posval1 != "" && posval2 != "" && posval3 != "")
        {
            if(posval1 === posval2 && posval2 === posval3){
                console.log("winner", posval1);
                showWinner(posval1);
            }
            
        }
        else {
            draw = false;
        }
    }
    if (draw) {
        drawgame();
    }
};


newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);