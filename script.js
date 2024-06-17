console.log("game")
let audioturn = new Audio("turn.wav");
let gameover = new Audio("game-over.wav");
let gameover2 = false;

let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWinner = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  Won"
            gameover2 = true
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

//game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWinner();
            if (!gameover2) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
}
);

//reset
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    gameover2 = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

});
